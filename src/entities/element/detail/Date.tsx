import React from "react";
import styled from "@emotion/styled";

interface DateInfo {
  label: string;
  startDate?: Date;
  endDate?: Date;
}

const formatDate = (date: Date): string => {
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월 2자리로
  const day = date.getDate().toString().padStart(2, "0"); // 일 2자리로
  return `${month}.${day}`;
};

// 날짜 정보 데이터
const dates: DateInfo[] = [
  {
    label: "체험 신청기간",
    startDate: new Date(2024, 6, 2),
    endDate: new Date(2024, 6, 25),
  },
  {
    label: "후기 작성기간",
    startDate: new Date(2024, 6, 29),
    endDate: new Date(2024, 7, 10),
  },
  {
    label: "심사중",
    startDate: new Date(2024, 7, 11),
    endDate: new Date(2024, 7, 12),
  },
  {
    label: "체험 종료",
    startDate: new Date(2024, 7, 14),
  },
];

const Styledh2 = styled.h2`
  margin-left: 20px;
  margin-bottom: -10px;
`;

const DateListContainer = styled.div`
  padding: 20px 7px;
  margin: 20px;
  background-color: #f7f5f5;
  max-width: 400px;
  border-radius: 10px;
`;

const DateItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
`;

const Label = styled.div<{ bgColor: string; opacity: number }>`
  padding: 5px;
  border-radius: 12px;
  background: ${({ bgColor }) => bgColor};
  opacity: ${({ opacity }) => opacity};
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-right: 15px;
  text-align: center;
  min-width: 100px;
`;

const DateRange = styled.div`
  font-size: 14px;
  color: #333;
`;

// 현재 날짜 가져오기
const currentDate = new Date();

const getBackgroundStyles = (
  startDate?: Date,
  endDate?: Date
): { background: string; opacity: number } => {
  if (!startDate) {
    // 날짜가 없는 경우
    return {
      background: "linear-gradient(270deg, #f0f0f0 0%, #e0e0e0 100%)",
      opacity: 1,
    };
  }

  if (currentDate >= startDate && currentDate <= (endDate || startDate)) {
    // 현재 날짜와 겹칠 때
    return {
      background:
        "linear-gradient(270deg, #0D1B4A 0%, #476090 50%, #7995B2 100%)",
      opacity: 1,
    };
  }

  if (currentDate < startDate) {
    // 현재 날짜 이후
    return { background: "#C2BFBD", opacity: 1 };
  }

  // 현재 날짜 이전
  return {
    background:
      "linear-gradient(270deg, #0D1B4A 0%, #476090 50%, #7995B2 100%)",
    opacity: 0.5,
  };
};

export const DateList: React.FC = () => {
  return (
    <div>
      <Styledh2>체험 일정</Styledh2>
      <DateListContainer>
        {dates.map((dateInfo, index) => {
          const { background, opacity } = getBackgroundStyles(
            dateInfo.startDate,
            dateInfo.endDate
          );
          return (
            <DateItem key={index}>
              <Label bgColor={background} opacity={opacity}>
                {dateInfo.label}
              </Label>
              <DateRange>
                {dateInfo.startDate ? formatDate(dateInfo.startDate) : ""}
                {dateInfo.endDate ? ` ~ ${formatDate(dateInfo.endDate)}` : ""}
              </DateRange>
            </DateItem>
          );
        })}
      </DateListContainer>
    </div>
  );
};
