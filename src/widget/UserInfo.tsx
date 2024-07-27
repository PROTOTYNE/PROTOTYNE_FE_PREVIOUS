import React from "react";
import './UserInfo.css';

interface UserInfoProps {
  userName: string;
  ticketsUsed: number;
  ticketsOwned: number;
}

// 컴포넌트 이름은 대문자로 시작해야 합니다.
const UserInfo: React.FC<UserInfoProps> = ({ userName, ticketsUsed, ticketsOwned }) => {
  return (
        <div className="userinfo-container">
            <div className="userinfo-content">
        <div className="userinfo-name">{userName}
        </div>
        <div className="userinfo-description">
          {ticketsOwned}개의 티켓으로 총 {ticketsUsed}개의 시제품을 체험했어요!
        </div>
        <div className="userinfo-tickets">
          보유 티켓: <span className="tickets-owned">{ticketsUsed}개</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;