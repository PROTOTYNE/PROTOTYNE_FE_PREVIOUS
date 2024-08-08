import React from 'react';
import ApplyButton from './ApplyButton';
import BookmarkButton from './BookmarkButton';
import styled from '@emotion/styled';

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

const Footer: React.FC = () => {
  return (
    <StyledFooter>
        <BookmarkButton/>
        <ApplyButton/>
    </StyledFooter>
  );
};

export default Footer;
