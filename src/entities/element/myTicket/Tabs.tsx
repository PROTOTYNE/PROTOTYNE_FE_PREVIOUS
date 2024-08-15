// Tabs.tsx
import React from "react";
import styled from "@emotion/styled";

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Tab = styled.div<{ active?: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "6px solid #0d1b4a" : "none")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

interface TabsProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabClick }) => {
  return (
    <TabsContainer>
      <Tab
        active={activeTab === "티켓구매"}
        onClick={() => onTabClick("티켓구매")}
      >
        티켓구매
      </Tab>
      <Tab
        active={activeTab === "전체내역"}
        onClick={() => onTabClick("전체내역")}
      >
        전체내역
      </Tab>
      <Tab
        active={activeTab === "신청내역"}
        onClick={() => onTabClick("신청내역")}
      >
        신청내역
      </Tab>
    </TabsContainer>
  );
};

//굳이 전체내역과 사용(신청)내역 분리해서 표시...?
