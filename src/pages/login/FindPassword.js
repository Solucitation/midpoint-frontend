import { React, useState } from "react";
import {
  Logo,
  LoginTitle,
  FindPasswordForm,
} from "../../components/CommonComponents";
import { commonStyles, LoginText } from "../../styles/styles";
import { useNavigate } from "react-router-dom";

const inputs = [
  { label: "이름", type: "name", id: "name", required: true },
  { label: "이메일", type: "email", id: "email", required: true },
];

function FindPassword() {
  const [verificationVisible, setVerificationVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setVerificationVisible(true);
  };

  const handleVerificationSubmit = () => {
    navigate('/login');
    console.log('finished')
  }
  return (
    <div>
      <Logo />
      <LoginTitle text="비밀번호 찾기" />
      <FindPasswordForm
        inputs={inputs}
        buttonText="인증번호 받기"
        onSubmit={handleSubmit}
        hideButton={verificationVisible}
        showVerification={verificationVisible}
        onVerificationSubmit={handleVerificationSubmit}
      />
    </div>
  );
}

export default FindPassword;
