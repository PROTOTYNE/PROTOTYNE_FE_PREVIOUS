import React from "react";
import ApplyButton from "./ApplyButton";
import BookmarkButton from "./BookmarkButton";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  height: 70px;
  right: 0px;
  bottom: 0px;

  background: #ffffff;
  border-top: 0.5px solid #efefef;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 5px 20%;
`;

export const Footer = ({
  require,
  id,
  isBookmarked,
}: {
  require: number;
  id: string;
  isBookmarked: boolean;
}) => {
  return (
    <StyledFooter>
      <BookmarkButton isBookmarked={isBookmarked} id={id} />
      <ApplyButton require={require} id={id} />
    </StyledFooter>
  );
};
