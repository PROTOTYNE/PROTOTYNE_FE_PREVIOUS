// entities/UsageStatusProcess.tsx
import styled from 'styled-components';

// 전체 컨테이너
const StatusContainer = styled.div`
  display: flex;
  align-items: center;
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
  position: relative;
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

export { Arrow, StatusBox, StatusContainer, StatusCount, StatusName };

