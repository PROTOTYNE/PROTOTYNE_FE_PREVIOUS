import React from "react";
import styled from "@emotion/styled";
import { ProductService } from "@/shared";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


interface DateInfo {
  label: string;
  startDate?: Date;
  endDate?: Date;
}

interface DateListProps {
  dates: DateInfo[];
}

const formatDate = (date: Date): string => {
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}.${day}`;
};

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

const currentDate = new Date();

const getBackgroundStyles = (
  startDate?: Date,
  endDate?: Date
): { background: string; opacity: number } => {
  if (!startDate) {
    return {
      background: "linear-gradient(270deg, #f0f0f0 0%, #e0e0e0 100%)",
      opacity: 1,
    };
  }

  if (currentDate >= startDate && currentDate <= (endDate || startDate)) {
    return {
      background:
        "linear-gradient(270deg, #0D1B4A 0%, #476090 50%, #7995B2 100%)",
      opacity: 1,
    };
  }

  if (currentDate < startDate) {
    return { background: "#C2BFBD", opacity: 1 };
  }

  return {
    background:
      "linear-gradient(270deg, #0D1B4A 0%, #476090 50%, #7995B2 100%)",
    opacity: 0.5,
  };
};

const DateList: React.FC<DateListProps> = ({ dates }) => {
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

export const DateData = () => {
  const eventId = useParams();
  const productService = ProductService();

  const [dates, setDates] = useState<DateInfo[]>([]);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await productService.getDates("");
        const dateInfo = response;

        const datesFromAPI: DateInfo[] = [
          {
            label: "체험 신청기간",
            startDate: new Date(dateInfo.eventStart),
            endDate: new Date(dateInfo.eventEnd),
          },
          {
            label: "후기 작성기간",
            startDate: new Date(dateInfo.feedbackStart),
            endDate: new Date(dateInfo.feedbackEnd),
          },
          {
            label: "심사중",
            startDate: new Date(dateInfo.judgeStart),
            endDate: new Date(dateInfo.judgeEnd),
          },
          {
            label: "체험 종료",
            startDate: new Date(dateInfo.endDate),
          },
        ];

        setDates(datesFromAPI);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDates();
  }, [eventId]);

  return <DateList dates={dates} />;  
};
