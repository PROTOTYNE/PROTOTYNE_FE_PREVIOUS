import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";

const SideBarContainer = styled.div`
  z-index: 2;
  background-color: white;
  height: 100%;
  width: 80%;
  position: fixed;
  top: 0;
  left: -80%;
  transition: 0.5s;
  &.open {
    left: 0%;
    transition: 0.5s;
  }
`;

const Top = styled.div`
  background: linear-gradient(to right, #7995b2 0%, #476090 51%, #0d1b4a 100%);
  height: 100px;
  border: none;
`;
const BackGround = styled.div<{ open: string }>`
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  position: ${(props) => props.open};
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
`;

const Logo = styled.h1`
  margin-top: 0px;
  padding-top: 40px;
  padding-left: 20px;
  color: white;
  font-size: 2.2rem;
  font-weight: bold;
`;
const Content = styled.div`
  padding: 60px 120px 10px 30px;
`;

const SideMenu = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  margin: 0px 0px 30px 0px;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const outside = useRef<any>();
  const navigate = useNavigate();

  const handleClickOutside = (e: any) => {
    if (!outside.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <BackGround open={isOpen ? "fixed" : "none"}>
      <SideBarContainer ref={outside} className={isOpen ? "open" : ""}>
        <Top>
          <Logo>Prototyne.</Logo>
        </Top>
        <Content>
          <SideMenu onClick={() => navigate("/bookmark")}>
            <Image src="../image/checkBookmark.svg" alt="checkBookMark" />
            관심목록
          </SideMenu>
          <SideMenu onClick={() => navigate("/alarm")}>
            <Image src="../image/alarm.svg" alt="alarm" />
            알림 내역
          </SideMenu>
          <SideMenu onClick={() => navigate("/mypage")}>
            <Image src="../image/account.svg" alt="account" />
            마이페이지
          </SideMenu>
        </Content>
      </SideBarContainer>
    </BackGround>
  );
};
export default Sidebar;
