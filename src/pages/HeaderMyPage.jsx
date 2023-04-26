/* 마이페이지에서 적용되는 네비바를 만들 파일입니다. */
import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  width: 200px;
  background-color: white; /* 네비게이션바 배경색 */
  padding: 16px;
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavigationItem = styled.li`
  margin-bottom: 8px; /* 각 네비게이션 사이 간격 */
`;

const HeaderMyPage = () => {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>마이페이지</NavigationItem>
        <NavigationItem>나의 작성</NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};

export default HeaderMyPage;
