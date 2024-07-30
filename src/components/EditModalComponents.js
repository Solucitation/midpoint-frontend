import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import writeModalStyles, {
  CloseButton,
  ProfileContainer,
  ProfileImg,
  ProfileName,
  InputName,
  Textarea,
  ImgContainer,
  AddImg,
  TagContainer,
  TagButton,
  SubmitButton,
} from '../styles/writeModalStyles';

Modal.setAppElement('#root');

const predefinedTags = [
  '#식사',
  '#카페',
  '#공부',
  '#문화생활',
  '#쇼핑',
  '#자연',
  '#산책',
  '#친목',
  '#여럿이',
  '#혼자',
];

const tagIdMap = {
  '#식사': 1,
  '#카페': 2,
  '#공부': 3,
  '#문화생활': 4,
  '#쇼핑': 5,
  '#자연': 6,
  '#산책': 7,
  '#친목': 8,
  '#여럿이': 9,
  '#혼자': 10,
};

const EditModal = ({
  isOpen,
  closeModal,
  updateReview,
  existingReview,
  currentUser,
}) => {
  const [placeName, setPlaceName] = useState('');
  const [content, setContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([null, null, null]);
  const [photoURLs, setPhotoURLs] = useState([null, null, null]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [profileData, setProfileData] = useState({
    nickname: '',
    profileImageUrl: '',  // 수정된 필드 이름
  });
  const [initialTags, setInitialTags] = useState([]);
  const [initialImages, setInitialImages] = useState([]);
  const [isImageChanged, setIsImageChanged] = useState(false);
  const fileInputRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (isOpen) {
      const fetchProfileData = async () => {
        try {
          const accessToken = localStorage.getItem('accessToken');
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/member/profile`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const data = response.data;
          setProfileData({
            nickname: data.nickname || '',
            profileImageUrl: data.profileImageUrl || '',  // 수정된 필드 이름
          });
        } catch (error) {
          console.error('프로필 정보를 불러오는 중 에러 발생:', error);
        }
      };

      fetchProfileData();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && existingReview) {
      setPlaceName(existingReview.title || '');
      setContent(existingReview.content || '');

      const initialPhotoURLs = [null, null, null];
      if (existingReview.images) {
        for (let i = 0; i < existingReview.images.length && i < 3; i++) {
          initialPhotoURLs[i] = existingReview.images[i];
        }
      }
      setPhotoURLs(initialPhotoURLs);
      setInitialImages(initialPhotoURLs);

      const initialTags = existingReview.postHashtags || [];
      setSelectedTags(initialTags);
      setInitialTags(initialTags);

      // 현재 입력된 데이터 출력
      console.log("Editing Mode: Existing Review Loaded", {
        placeName: existingReview.title,
        content: existingReview.content,
        photoURLs: existingReview.photoURLs,
        selectedTags: existingReview.tags,
      });
    } else {
      resetForm();
      // 현재 입력된 데이터 출력
      console.log("Form Reset");
    }
  }, [isOpen, existingReview]);

  useEffect(() => {
    return () => {
      photoURLs.forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [photoURLs]);

  const resetForm = () => {
    setPlaceName('');
    setContent('');
    setSelectedFiles([null, null, null]);
    setPhotoURLs([null, null, null]);
    setSelectedTags([]);
    setInitialTags([]);
    setInitialImages([]);
    setIsImageChanged(false);
  };

  const handleIconClick = (index) => {
    fileInputRefs[index]?.current?.click();
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[index] = file;
    setSelectedFiles(newSelectedFiles);

    const newPhotoURLs = [...photoURLs];
    if (newPhotoURLs[index]) {
      URL.revokeObjectURL(newPhotoURLs[index]);
    }
    newPhotoURLs[index] = URL.createObjectURL(file);
    setPhotoURLs(newPhotoURLs);
    setIsImageChanged(true);

    // 현재 입력된 데이터 출력
    console.log("Current Form Data", {
      placeName,
      content,
      photoURLs: newPhotoURLs,
      selectedTags,
    });
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 2) {
      setSelectedTags([...selectedTags, tag]);
    }

    // 현재 입력된 데이터 출력
    console.log("Current Form Data", {
      placeName,
      content,
      photoURLs,
      selectedTags,
    });
  };

  const validateForm = () => {
    if (!placeName.trim()) {
      alert('제목을 입력해 주세요.');
      return false;
    }

    if (placeName.length > 100) {
      alert('제목은 100자 이내로 입력해 주세요.');
      return false;
    }

    if (!content.trim()) {
      alert('내용을 입력해 주세요.');
      return false;
    }

    if (selectedTags.length < 2) {
      alert('태그를 2개 선택해 주세요.');
      return false;
    }

    const validPhotos = selectedFiles.filter((file) => file !== null);
    if (initialImages.filter((url) => url !== null).length < 1 && validPhotos.length < 1) {
      alert('최소 한 장의 사진을 업로드해 주세요.');
      return false;
    }

    return true;
  };

  const handleUpdateReview = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const tags = selectedTags.map((tag) => tagIdMap[tag]);

    const postDto = {};

    if (placeName !== (existingReview?.title || '')) {
      postDto.title = placeName;
    }
    if (content !== (existingReview?.content || '')) {
      postDto.content = content;
    }
    if (JSON.stringify(tags) !== JSON.stringify(initialTags.map((tag) => tagIdMap[tag]))) {
      postDto.postHashtag = tags;
    }

    const formData = new FormData();
    formData.append('postDto', JSON.stringify(postDto));

    if (isImageChanged) {
      const validPhotos = selectedFiles.filter((file) => file !== null);
      validPhotos.forEach((file) => {
        formData.append('postImages', file);
      });
    } else {
      initialImages.forEach((url) => {
        if (url) {
          formData.append('postImages', url);
        }
      });
    }

    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/posts/${existingReview.postId}`,
        formData,
        { headers }
      );

      window.location.reload();
    } catch (error) {
      console.error('Error updating review:', error);
      alert('리뷰 수정 중 오류가 발생하였습니다.');
    }
  };

  const handleCloseModal = () => {
    resetForm();
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={{
        overlay: writeModalStyles.overlay,
        content: writeModalStyles.modal,
      }}
      contentLabel='Edit Review Modal'
    >
      <form onSubmit={handleUpdateReview}>
        <CloseButton onClick={handleCloseModal}>X</CloseButton>
        <ProfileContainer>
          <ProfileImg
            src={profileData.profileImageUrl || '/img/defaultProfile.png'}  // 기본 이미지 설정
            alt='profile'
            onError={(e) => e.target.src = '/img/defaultProfile.png'}  // 이미지 로드 오류 시 기본 이미지로 설정
          />
          <ProfileName>{profileData.nickname}</ProfileName>
        </ProfileContainer>
        <InputName
          type='text'
          placeholder='글제목'
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
          maxLength={100}
        />
        <Textarea
          placeholder='내용을 입력하세요'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ImgContainer>
          {photoURLs.map((url, index) => (
            <span key={index}>
              <AddImg
                src={url || '/img/addPhoto.png'}
                onClick={() => handleIconClick(index)}
                alt={url ? `Image ${index + 1}` : `Upload ${index + 1}`}
              />
              <input
                type='file'
                ref={fileInputRefs[index]}
                onChange={(e) => handleFileChange(index, e)}
                style={{ display: 'none' }}
              />
            </span>
          ))}
        </ImgContainer>
        <div style={{ fontWeight: 'bold' }}>태그 (2개 필수)</div>
        <TagContainer>
          {predefinedTags.map((tag) => (
            <TagButton
              type='button'
              key={tag}
              onClick={() => handleTagClick(tag)}
              selected={selectedTags.includes(tag)}
            >
              {tag}
            </TagButton>
          ))}
        </TagContainer>
        <SubmitButton type='submit'>수정</SubmitButton>
      </form>
    </Modal>
  );
};

export default EditModal;