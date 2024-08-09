// entities/UsageStatusProcess.tsx
import styled from 'styled-components';

// 전체 컨테이너
const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative; /* 자식 요소의 절대 위치를 위한 설정 */
`;

// 상태 사각형
interface StatusBoxProps {
  isActive: boolean; // 현재 상태 여부
}

const StatusBox = styled.div<StatusBoxProps>`
  width: 55px;
  height: 59px;
  padding: 9px;
  background-color: ${({ isActive }) => (isActive ? '#24446B' : '#C2BFBD')};
  border-radius: 15px; /* 휘어짐 정도 조절 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 5px; /* 사각형 간격 */
`;

// 상태 텍스트
const StatusCount = styled.span`
  color: white;
  font-weight: semibold;
  position: absolute;
  top: 15px; /* 상단 위치 */
  font-size: 16px;
`;

const StatusName = styled.span`
  color: white;
  font-weight: semibold;
  position: absolute;
  bottom: 12px; /* 하단 위치 */
  font-size: 16px;
`;

// 화살표
const Arrow = styled.div`
  width: 10px; /* 화살표 너비 */
  height: 9px; /* 화살표 높이 */
  background-color: transparent;
  border-left: 1.5px solid black; /* 화살표 선 */
  border-top: 1.5px solid black; /* 화살표 선 */
  transform: rotate(139deg); /* 화살표 회전 */
  margin: 0 5px; /* 화살표 간격 */
`;

// 전체 가로 직선
const Divider = styled.div`
  width: 100%; /* 직선의 너비를 100%로 설정 */
  height: 2px; /* 직선 두께 */
  background-color: #D1D1D1; /* 직선 색상 */
  margin-top: 10px; /* 사각형과 직선 간격 */
  position: absolute; /* 절대 위치 설정 */
  top: 80px; /* Y 위치에 맞춰 조정 */
  left: 0; /* 왼쪽 기준으로 정렬 */
`;

export { Arrow, StatusBox, StatusContainer, StatusCount, StatusName, Divider };

