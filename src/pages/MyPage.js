import React, { useState } from "react";
import "../styles/global.css";
import { myPageStyles } from '../styles/myPageStyles';
import { Logo } from "../components/CommonComponents";
import MyPageProfile from './MyPage/MyPageProfile';
import MyPageFavorites from './MyPage/MyPageFavorites';
import MyPageSearchHistory from './MyPage/MyPageSearchHistory';
import MyPagePosts from './MyPage/MyPagePosts';

const links = [
  { name: 'profile', label: '회원 정보', activeIcon: '/img/MyPageProfileIcon.png', icon: '/img/MyPageNullProfile.png'},
  { name: 'favorites', label: '즐겨찾기', activeIcon: '/img/MyPageFavoriteIcon.png', icon: '/img/MyPageNullHeart.png' },
  { name: 'history', label: '검색 기록', activeIcon: '/img/MyPageSearchHistoryIcon.png', icon: '/img/MyPageNullChart.png' },
  { name: 'posts', label: '내가 쓴 글', activeIcon: '/img/MyPagePostsIcon.png', icon: '/img/MyPageNullPosts.png' }
];

const MyPage = () => {
  const [currentPage, setCurrentPage] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: '김눈송',
    nickname: '솔룩션짱짱최고',
    email: 'soluxion@sookmyung.ac.kr',
    password: '12345678',
    profileImage: '../img/default-profile.png',
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <MyPageProfile setCurrentPage={setCurrentPage} profileData={profileData} setProfileData={setProfileData} />;
      case 'favorites':
        return <MyPageFavorites />;
      case 'history':
        return <MyPageSearchHistory />;
      case 'posts':
        return <MyPagePosts />;
      default:
        return <MyPageProfile setCurrentPage={setCurrentPage} profileData={profileData} setProfileData={setProfileData} />;
    }
  };

  return (
    <div style={myPageStyles.wrapper}>
      <div>
        <Logo />
      </div>
      <div style={myPageStyles.navWrapper}>
        <nav style={myPageStyles.container}>
          <ul style={myPageStyles.nav}>
            {links.map((link) => (
              <li key={link.name} style={myPageStyles.navItem}>
                <button
                  style={{
                    ...myPageStyles.navLink,
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() => setCurrentPage(link.name)}
                >
                  <img
                    src={currentPage === link.name ? link.activeIcon : link.icon}
                    alt={link.label}
                    width="20"
                    height="20"
                    style={{ marginRight: '5px' }}
                  />
                  <span
                    style={{
                      ...myPageStyles.navLinkText,
                      color: currentPage === link.name ? '#fff' : '#888',
                    }}
                  >
                    {link.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div style={myPageStyles.content}>{renderPage()}</div>
      </div>
    </div>
  );
};

export default MyPage;
