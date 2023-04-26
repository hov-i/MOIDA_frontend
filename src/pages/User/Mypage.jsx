import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import HeaderMyPage from "../HeaderMyPage";


//넣을 거 너무 많아서 일단 패스
const Container = styled.div`
  display: flex;
  justify-content: center;
`
const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 24px;
  background-color: #F3F3F3;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #F3F3F3;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const InfoText = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
`;

// 스터디
const StudyContainer = styled.div`
  display: flex;
  width: 1200px;
`;

const StudyItemContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 200px;
  margin-right: 50px;
  border: 1px solid #F3F3F3;
  border-radius: 10px;
`;
// 스터디 내부 라인 1
const Line1 = styled.div`
  justify-content: space-between;
  display: flex;
  width: 350px;
`;
// Line1In-시작
const Line1In = styled.div`
  display: flex;
  width: 350px;
`;
const Round = styled.div`
  margin: 15px;
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  
  background-color: ${props => props.color};
`;/*background-color: ${(props) => getRandomColor()};*/
const StudyName = styled.div`
  margin: 15px;
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 20px;
`;
//Line1In End
const People = styled.div`
  width: 180px;
  margin: 15px;
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
`;
// 스터디 콘테이너 내부
const Tags = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: row-reverse;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 18px;
`;

//자기소개
const MyInfoTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px;
  margin-bottom: 12px;
  font-size: 15px;
  border: 1px solid #ccc;
  resize: none;
`;

const MyInfoButton = styled.button`
  width: 100px;
  padding: 12px;
  background-color: #A393F8;
  color: #fff;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #6E53F4;
  }
`;

const MyImgInPut = styled.input `
  display: none;
`



// 랜덤한 색상 생성 함수 : 색 안 겹치게 하려면 랜덤 컬러 다 썼을 경우 반환 색 고려해야해서 우선 제외
// 아니면 차라리 순서대로 색상 입힐까 싶기도...
/*const getRandomColor = () => {
  const colorList = ['#ffadad', '#8effc3', '#89b6ff', '#be90ff', '#ffe19c'];
  const randomIndex = Math.floor(Math.random() * colorList.length);
  return colorList[randomIndex];
};*/





const MyPage = () => {

  const [studyInfo, setStudyInfo] = useState([]);
  const [roundColor, setRoundColor] = useState("#964bff");

  useEffect(() => {
    axios
      .get("/study")
      .then((response) => {
        setStudyInfo(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch study list:", error);
      });
  }, []);


  useEffect(() => {
    const fetchStudyInfo = async () => {
      try {
        const response = await axios.get("https://api.example.com/study");
        const studyInfo = response.data;
        const colors = ["#edb3b3", "#96cf6d", "#aba1e8", "#d398da", "#ffe385"];
        const colorIndex = studyInfo.length % colors.length;
        const updatedColor = colors[colorIndex];
        setRoundColor(updatedColor);
      } catch (error) {
        console.error("Failed to fetch study info:", error);
      }
    };
    fetchStudyInfo();
  }, []);

  //수정 한 번에
  const [isEditing, setIsEditing] = useState(false); // 수정 변수

  //이미지 등록
  const [myImg, setMyImg] = useState(null); // 이미지 등록을 파일 형식으로... -> null에 넣을 기본 이미지??? 아 맞다 저거 컬러였나.
  const [showMyImgInPut, setShowMyImgInPut] = useState(false);

  //이미지 수정하면 수정한 이미지 보이게 하기
  const handleMyImgChange = (event) => {
    const file = event.target.files[0]; // 선택된 파일 정보 가져오기
    const reader = new FileReader(); // 파일을 읽기 위한 FileReader 객체 생성

    // FileReader 객체에 로드 이벤트 핸들러 등록
    reader.onload = (event) => {
      const myImgUrl = event.target.result; // 이미지 미리보기 URL 생성
      setMyImg(myImgUrl); // 이미지 미리보기 URL 상태 업데이트
    };

    // 파일 읽기 시작
    reader.readAsDataURL(file);
  };


  //자기소개
  const [myInfo, setMyInfo] = useState('자기 소개를 입력하세요.'); // 자기 소개 변수
  

  // 자기 소개 입력 폼 텍스트 변경
  const handleMyInfoChange = (e) => {
    setMyInfo(e.target.value);
  };

  // 수정 버튼(전체 가능하게 수정할 것)
  const handleEditmyInfo = () => {
    setShowMyImgInPut(true);
    setIsEditing(true);
  };

  // 저장 버튼
  const handleSaveMyInfo = () => {
    setIsEditing(false);
    alert('저장되었습니다: ' + myInfo);
  };

  

  return (
    <Container>
        <HeaderMyPage />
        <MyPageContainer>
      
      <div>
        {/* 내정보 */}
        <Title>내 정보</Title>
        <InfoContainer>
          {showMyImgInPut && <input type="file" id="fileInput" />}
          <MyImgInPut type="file" onChange={handleMyImgChange}/> {myImg && ( // 이미지 미리보기 URL이 있을 경우에만 이미지 출력
        <img src={myImg} alt="이미지 미리보기" />)} <>님</>
          <InfoText>이름: </InfoText>
          <InfoText>이메일: </InfoText>
          <InfoText>자기소개: </InfoText>
          {isEditing ? (
        // 수정 모드일 경우 입력 폼 표시
        <>
          <MyInfoTextarea value={myInfo} onChange={handleMyInfoChange} />
          <MyInfoButton onClick={handleSaveMyInfo}>저장</MyInfoButton>
        </>
      ) : (
        // 수정 모드가 아닐 경우 텍스트 표시
        <>
          <div>{myInfo}</div>
          <MyInfoButton onClick={handleEditmyInfo}>수정하기</MyInfoButton>
        </>
      )}
        </InfoContainer>
        <br />
        {/* 내 스터디 */}
        <Title>내 스터디</Title>
        <StudyContainer>
        {studyInfo.map(study => (
          <StudyItemContainer key={study.id}>
            <Line1><Line1In><Round color={roundColor}>코</Round> <StudyName>스터디 1</StudyName></Line1In> <People>회원수/모집인원</People> </Line1>
              <p>스터디 소개</p>
              <Tags>#태그들</Tags>
          </StudyItemContainer>
        ))}
            <StudyItemContainer>스터디 3</StudyItemContainer> 
        </StudyContainer>
      </div>
    </MyPageContainer>
    </Container>
    
  );
};

export default MyPage;