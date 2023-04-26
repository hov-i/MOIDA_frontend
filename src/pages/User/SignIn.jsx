import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SignContainer = styled.div`
  display: flex;
  max-width: 800px;
  text-align: left;
  margin: 20px auto;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  display: flex;
  font-size: 36px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Form = styled.form`
  max-width: 800px;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const Body = styled.form`
  display: flex;
  max-width: 800px;
  text-align: left;
  align-items: center;
  justify-content: space-between;
`;

const Body1 = styled.div`
  
  display: flex;
  width: 330px;
  flex-direction: column;
  text-align: left;
  margin-bottom: 16px;
`;

const Body2 = styled.div`
  display: flex;
  width: 470px;
  height: 480px;
  background-color: rgb(107, 78, 254);
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
  flex: 1;
  padding: 8px;
  border: 2px solid #e4e4e4;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100px;
  font-size:17px;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 8px;
  margin-top: 20px;
  background-color: rgb(107, 78, 254);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Find = styled.p`
  display: flex;
  color: black;
  font-size: 14px;
`;

const SignUp = styled.p`
  display: flex;
  color: black;
  font-size: 14px;
  margin-right: 10px;
`;



const SignIn = () => {
    return(
        <SignContainer>
          <Form>
            <Title>로그인</Title>
            <Body>
              <Body1>
                <InputLabel>이메일</InputLabel>
                <Input type="email" placeholder="이메일을 입력해주세요." required/>
              
                <InputLabel>비밀번호</InputLabel>
                <Input type="password" placeholder="비밀번호를 입력해주세요." required/>
              <Body>
                <Find>아이디/비밀번호 찾기</Find>
                <SignUp><Link to="/SignUp">모이다가 처음이세요?</Link></SignUp>
              </Body>
              </Body1>
              
            </Body>

            <Button type="submit">로그인</Button>
          </Form>

          <Body2>   
          </Body2>
        </SignContainer>
    );
};

export default SignIn;