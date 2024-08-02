export const myPageStyles = {
  container: {
    maxWidth: '1000px',
    height:'40px',
    margin: '110px auto 35px auto',
    backgroundColor: '#000',
    marginTop: '110px'
  },
  nav: {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    display: 'flex',
    margin: '0 55px',
    padding: '10px',
    alignItems: 'center', 
    color: '#000',

  },
  navLink: {
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    fontFamily: 'Freesentation',
  },
  navLinkText: {
    marginLeft: '5px',
    color:'#fff',
  },
  navLinkHover: {
    textDecoration: 'underline',
  },
  profileContainer: {
    maxWidth: '600px',
    height: '540px',
    margin: '0 auto',
    padding: '20px',
  },
  profileItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '50px',
  },
  profilePictureItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '10px',
  },
  verificationContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileLabel: {
    minWidth: '100px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1B4345',
  },
  profileText: {
    flex: 1,
    fontFamily: 'Freesentation',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1B4345',
    borderBottom: '4px solid #1B4345',
    paddingBottom: '6px',
  },
  profileEditContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  profileEditText: {
    flex: 1,
    border: 'none',
    borderBottom: '4px solid #1B4345',
    backgroundColor: 'transparent',
    color: '#1B4345',
    fontFamily: 'Freesentation',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '4px 0',
    outline: 'none',
  },
  profileButton: {
    marginLeft: '15px',
    padding: '8px 20px',
    fontFamily: 'Freesentation',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: 'transparent',
    border: '2px solid #1B4345',
    borderRadius: '2px',
    cursor: 'pointer',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
  profileButtonEdit: {
    marginRight: '100px',
    padding: '10px 35px',
    fontFamily: 'Freesentation',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#1B4345',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
  },
  profileButtonQuit: {
    padding: '10px 35px',
    fontFamily: 'Freesentation',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#D00303',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
  },
  profileButtonCancel: {
    marginLeft: '10px',
    padding: '10px 30px',
    fontFamily: 'Freesentation',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: 'transparent',
    border: '2px solid #1B4345',
    borderRadius: '2px',
    cursor: 'pointer',
  },

  passwordContainer: {
    maxWidth: '650px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  passwordTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1B4345',
    marginBottom: '60px',
  },
  passwordInputContainer: {
    marginBottom: '80px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #1B4345',
  },
  passwordLabel: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1B4345',
    marginRight: '10px',
  },
  passwordInput: {
    flex: 1,
    padding: '10px',
    fontSize: '18px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
  },

  passwordCodeInput: {
    flex: 1,
    padding: '5px',
    fontSize: '16px',
    border: 'none',
    borderBottom: '4px solid #1B4345',
    outline: 'none',
    backgroundColor: 'transparent',
  },

  passwordButton: {
    padding: '10px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#1B4345',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
  },
  deleteConfirmationContainer: {
    maxWidth: '650px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  deleteConfirmationTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1B4345',
    marginBottom: '60px',
  },
  deleteConfirmationMessage: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#D00303',
    marginBottom: '60px',
  },
  deleteButton: {
    padding: '10px 30px',
    fontFamily: 'Freesentation',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#D00303',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
  },
  deleteCheckButton: {
    marginRight:'80px',
    padding: '10px 30px',
    fontFamily: 'Freesentation',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#D00303',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
  },
    
  deleteConfirmationButton: {
    padding: '10px 30px',
    fontFamily: 'Freesentation',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1B4345',
    backgroundColor: 'transparent',
    border: '2px solid #1B4345',
    borderRadius: '2px',
    cursor: 'pointer',
  },

  //2번 즐겨찾기
  favoritesContainer: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '100px',
    marginTop: '50px',
  },
  favoritesLocateContainer: {
    width: '200px',
    height: '150px',
    backgroundColor: 'white',
    borderRadius: "8px",
    padding: '10px',
  },
  favoritesFriendsContainer: {
    width: '350px',
    height: '500px',
    backgroundColor: 'white',
    borderRadius: "8px",
    padding: '10px',
  },
  locateContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginLeft: '20px',
    whiteSpace: 'pre-wrap',
    paddingBottom: '15px',
    cursor:'pointer',
  },
  addFriendButton: {
    border: 'none',
    backgroundColor: 'transparent',
    display: 'inline-block',
    cursor: 'pointer',
  },
  overlay: {
    backgroundColor: 'rgba(1, 1, 1, 0.5)',
    zIndex:3000,
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '400px',
    backgroundColor: '#F2F2EF',
    padding: "20px",
    border: '3px solid #000',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: '1000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1B4345',
    position: 'absolute',
    fontSize: '30px',
    fontWeight: 'bold',
    top: '30px',
    right: '30px',
    zIndex: '1000',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  addImg: {
    width: '60px',
    display: 'block',
    margin: '0 auto',
  },
  inputName: {
    width: '400px',
    height: '40px',
    border: 'none',
    textAlign: 'center',
    color: '#000',
    fontSize: '20px',
    fontFamily: 'Freesentation',
    backgroundColor: 'transparent',
    outline: 'none',
  },
  inputLocate: {
    width: '400px',
    height: '40px',
    border: 'none',
    borderRadius: '5px',
    fontFamily: 'Freesentation',
    fontSize: '18px',
    textAlign: 'center',
    outline: 'none',
  },
  predictionsContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 1000,
    maxHeight: '200px',
    overflowY: 'auto',
  },
  predictionItem: {
    padding: '10px',
    cursor: 'pointer',
  },
  addFriendModalButton: {
    width: '100px',
    height: '35px',
    color: '#ffffff',
    backgroundColor: '#1B4345',
    border: 'none',
    fontFamily: 'Freesentation',
    fontSize: '18px',
    marginTop: '30px',
  },
  favoriteButtonEdit: {
    width: '80px',
    height: '35px',
    color: '#ffffff',
    backgroundColor: '#1B4345',
    border: 'none',
    fontFamily: 'Freesentation',
    fontSize: '18px',
    marginTop: '50px',
  },
  favoriteButtonQuit: {
    width: '80px',
    height: '35px',
    color: '#fff',
    backgroundColor: '#D00303',
    border: 'none',
    fontFamily: 'Freesentation',
    fontSize: '18px',
    marginLeft: '55px',
  },

  suggestionsList: {
    width: '400px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    backgroundColor: 'white',
    border: '1px solid #ccc',
    zIndex: 1000,
  },
  suggestionItem: {
    padding: '10px',
    cursor: 'pointer',
  },

  //3번 검색 기록
  historyContainerEmpty: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
  },
  historyNone: {
    border: 'none',
    fontFamily: 'Freesentation',
    fontSize: '30px',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
    historyContainer: {
        width: '800px',
        margin: '50px auto',
        border: '2px solid #000',
        backgroundColor: 'white',
    },
    dateSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '10px',
        borderBottom: '1px solid #ccc',
    },
    dateColumn: {
      width: '15%',
      margin:'5px 20px',
      fontFamily: 'Freesentation',
      fontWeight: 'bold',
      fontSize: '24px',
      color: '#333',
      marginRight: '10px',
    },
    neighborhoodTitle: {
      marginTop:'5px',
        fontFamily: 'Freesentation',
        fontWeight: 'bold',
        fontSize: '24px',
    },
    recommendationContainer: {
      width: '400px',
    },
    recommendationList: {
      display: 'flex',
      flexDirection: 'column',
      margin:'15px 0',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',

    },
    recommendationItemContainer: {
        marginBottom: '10px',
    },
    recommendationItem: {
        display: 'flex',
      alignItems: 'center',
        marginTop:'5px'
    },
    recommendationItemLastChild: {
        marginBottom: '0',
    },
    itemImage: {
        width: '50px',
        height: '50px',
        backgroundColor: '#ddd',
        marginRight: '10px',
    },
    itemContent: {
        flexGrow: '1',
    },
    itemTitle: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    itemAddress: {
        fontSize: '14px',
        color: '#555',
    },
    shareColumn: {
        width: '20%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    shareIcon: {
        width: '40px',
      height: '40px',
        margin:'0 15px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '12px',
    },
};