import * as React from 'react';
import styled from '@emotion/styled';

interface DateProps {
  // 날짜 string 타입으로 정의... 추후 Date 타입으로 수정 필요 
  applyPeriod: string;
  winnerAnnouncement: string;
  reviewPeriod: string;
  resultAnnouncement: string;
  assessmentProgress: string;
}

const Container = styled.div`
  margin: 20px; /* 외부 여백 */
`;

const HeaderText = styled.h3`
  margin-bottom: 10px;
  font-family: 'Inter';
  color: #333;
`;

const TableWrapper = styled.div`
  background-color: #F4F1EE; /* 사각형 배경색 */
  padding: 20px 10px; /* 내부 여백 */
  border-radius: 10px; /* 모서리 둥글게 */
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: seperate;
  border-spacing: 10px 20px;
`;

const LabelCell = styled.td`
  font-family: 'Inter';
  background-color: #C2BFBD;
  border-radius: 10px;
  color: #FFFFFF;
  font-size: 15px;
  text-align: center;
`;

const Available = styled.td`
  background: linear-gradient(270deg, #0D1B4A 0%, #476090 50%, #7995B2 100%);
  font-family: 'Inter';
  border-radius: 10px;
  color: #FFFFFF;
  font-size: 15px;
  text-align: center;
`;

const ValueCell = styled.td`
  font-family: 'Inter';
  font-size: 15px;
  color: #2E2E2E;
  padding: 5px;
`;

const Date: React.FC<DateProps> = ({
  applyPeriod,
  winnerAnnouncement,
  reviewPeriod,
  resultAnnouncement,
  assessmentProgress,
}) => {
  return (
    <Container>
      <HeaderText>체험 일정</HeaderText>
      <TableWrapper>
        <StyledTable>
          <tbody>
            <tr>
              <Available>체험 신청 기간</Available>
              <ValueCell>{applyPeriod}</ValueCell>
            </tr>
            <tr>
              <LabelCell>당첨자 발표</LabelCell>
              <ValueCell>{winnerAnnouncement}</ValueCell>
            </tr>
            <tr>
              <LabelCell>후기 작성 기간</LabelCell>
              <ValueCell>{reviewPeriod}</ValueCell>
            </tr>
            <tr>
              <LabelCell>심사중</LabelCell>
              <ValueCell>{assessmentProgress}</ValueCell>
            </tr>
            <tr>
              <LabelCell>결과 발표</LabelCell>
              <ValueCell>{resultAnnouncement}</ValueCell>
            </tr>
          </tbody>
        </StyledTable>
      </TableWrapper>
    </Container>
  );
};

export default Date;
