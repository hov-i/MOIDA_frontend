import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SignContainer = styled.div`
  max-width: 800px;
  text-align: left;
  margin: 20px auto;
  padding: 25px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  font-size: 36px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Form = styled.form`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.form`
  display: flex;
  max-width: 800px;
  text-align: left;
  align-items: center;
`;

const Body1 = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  text-align: left;
  margin-bottom: 16px;
`;

const Body2 = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  margin-bottom: 16px;
`;

const InputLabel = styled.p`
  text-align: left;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 19px;
  margin-right: 10px;
`;

const Input = styled.input`
  width: 300px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  padding: 8px;
  border: 2px solid #e4e4e4;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100px;
  font-size:17px;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 8px;
  background-color: rgb(107, 78, 254);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: left;
  margin: 5px 0px 20px 10px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
`;

const CheckboxLabel = styled.label`
  width: 800px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
`;

const InputCheckBox = styled.input`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  border: 2px solid #e4e4e4;
  border-radius: 4px;
`;

// 회원가입 창
const SignUp = () => {

  const [isAgreed, setIsAgreed] = useState(false); // 개인 정보 제공 동의

  const handleCheckBoxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  // 회원가입 버튼 클릭
  const handleSignUp = () => {
    // 개인 정보 제공 동의 체크 여부 확인
    if (isAgreed) {
      // 체크 박스에 동의한 경우 회원가입
      console.log('회원가입 버튼이 클릭되었습니다. 개인 정보 제공에 동의하였습니다.');
    } else {
      console.log('개인 정보 제공에 동의해야 회원가입이 가능합니다.');
    }
  };

  return (
    <SignContainer>
      <Title>회원가입</Title>
      <Form>
        <Body>
          <Body1>
            <InputLabel>이메일</InputLabel>
            <Input type="email" placeholder="이메일을 입력해주세요." required/>
          
            <InputLabel>비밀번호</InputLabel>
            <Input type="password" placeholder="비밀번호를 입력해주세요." required/>
          
            <InputLabel>비밀번호 확인</InputLabel>
            <Input type="password" placeholder="비밀번호를 다시 입력해주세요." required/>
          </Body1>
          <Body2>
            <InputLabel>이름</InputLabel>
            <Input type="text" placeholder="이름을 입력해주세요." required/>
          
            <InputLabel>전화번호</InputLabel>
            <Input type="text" placeholder="전화번호를 입력해주세요." required/>
          </Body2>
        </Body>

        <CheckBox>
        <InputCheckBox type="checkbox" checked={isAgreed} onChange={handleCheckBoxChange}/>
        <CheckboxLabel>개인 정보 제공에 동의합니다.</CheckboxLabel>
        </CheckBox>
        
        <Button type="submit" onClick={handleSignUp}><Link to="/Home">회원가입</Link></Button>
      </Form>

    </SignContainer>
  );
};

export default SignUp;