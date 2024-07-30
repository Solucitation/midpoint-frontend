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

const WriteModal = ({
  isOpen,
  closeModal,
  addReview,
  existingReview = {},
  isEditing,
  currentUser,
}) => {
  const [placeName, setPlaceName] = useState('');
  const [content, setContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([null, null, null]);
  const [photoURLs, setPhotoURLs] = useState([null, null, null]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [profileData, setProfileData] = useState({
    nickname: '',
    profileImage: '../img/default-profile.png',
  });
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
            nickname: data.nickname,
            profileImage: data.profileImage || '../img/default-profile.png',
          });
        } catch (error) {
          console.error('프로필 정보를 불러오는 중 에러 발생:', error);
        }
      };

      fetchProfileData();
    }
  }, [isOpen]);

  useEffect(() => {
    console.log('WriteModal useEffect called', { isEditing, existingReview });
    if (isEditing && existingReview) {
      setPlaceName(existingReview.title || '');
      setContent(existingReview.content || '');
      setPhotoURLs(existingReview.images || [null, null, null]);
      setSelectedTags(
        existingReview.postHashtags
          ? existingReview.postHashtags.map((tag) =>
              Object.keys(tagIdMap).find((key) => tagIdMap[key] === tag)
            )
          : []
      );
    } else {
      setPlaceName('');
      setContent('');
      setPhotoURLs([null, null, null]);
      setSelectedTags([]);
    }
  }, [isEditing, existingReview]);

  useEffect(() => {
    return () => {
      photoURLs.forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [photoURLs]);

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
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 2) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const validateForm = () => {
    if (!placeName.trim()) {
      alert('제목을 입력해 주세요.');
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
    if (validPhotos.length < 1) {
      alert('최소 한 장의 사진을 업로드해 주세요.');
      return false;
    }

    return true;
  };

  const handleAddReview = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const tags = selectedTags.map((tag) => tagIdMap[tag]);

    const newReview = {
      placeName,
      content,
      photos: selectedFiles.filter((file) => file !== null),
      tags,
      author: currentUser,
    };

    await addReview(newReview, isEditing);
    window.location.reload(); // 페이지 새로 고침
  };

  const handleCloseModal = () => {
    console.log('handleCloseModal called');
    setPlaceName('');
    setContent('');
    setSelectedFiles([null, null, null]);
    setPhotoURLs([null, null, null]);
    setSelectedTags([]);
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
      contentLabel='Write Review Modal'
    >
      <form onSubmit={handleAddReview}>
        <CloseButton onClick={handleCloseModal}>X</CloseButton>
        <ProfileContainer>
          <ProfileImg src={profileData.profileImage} alt='profile' />
          <ProfileName>{profileData.nickname}</ProfileName>
        </ProfileContainer>
        <InputName
          type='text'
          placeholder='글제목'
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
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
        <SubmitButton type='submit'>{isEditing ? '수정' : '게시'}</SubmitButton>
      </form>
    </Modal>
  );
};

export default WriteModal;