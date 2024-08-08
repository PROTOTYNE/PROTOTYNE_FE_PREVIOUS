import React from 'react';
import ApplyButton from './ApplyButton';
import styled from '@emotion/styled';

// styled를 사용하여 Footer 스타일을 정의합니다.
const StyledFooter = styled.footer`
    position: fixed;
    width: 100%;
    height: 70px;
    right: 0px;
    bottom: 0px;

    background: #FFFFFF;
    border-top: 0.5px solid #EFEFEF;
    box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.2);
`;

// React 컴포넌트로 Footer를 생성합니다.
const Footer: React.FC = () => {
  return (
    <StyledFooter>
        <ApplyButton/>
    </StyledFooter>
  );
};

export default Footer;
