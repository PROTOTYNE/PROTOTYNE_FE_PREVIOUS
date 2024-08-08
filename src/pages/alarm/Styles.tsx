import styled from "@emotion/styled";

export const Element = ({
  img,
  name,
  content,
  time,
}: {
  img: string;
  name: string;
  content: string;
  time: Date;
}) => {
  return (
    <ElementContainer>
      <Img src={img} alt="alarm img" />
      <Content>
        <div>{name}</div>
        <span>{content}</span>
      </Content>
      <Time>{getDaysDifference(time)}</Time>
    </ElementContainer>
  );
};

function getDaysDifference(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return Math.floor(diffInDays) === 0
    ? "오늘"
    : `${Math.floor(diffInDays)}일전`;
}

const ElementContainer = styled.div`
  height: 100px;
  width: 95%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 5px;
`;

const Img = styled.img`
  height: 90px;
  width: 90px;
  margin-top: 5px;

  border-radius: 10px;

  object-fit: contain;

  background-color: #b6b6b6;
`;

const Content = styled.div`
  width: 65%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  font-weight: bold;

  font-size: 18px;

  > div {
    display: inline-block;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > span {
    font-weight: normal;
    font-size: 16px;

    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-bottom: 20px;
  }
`;

const Time = styled.div`
  margin-top: 70px;

  font-size: 16px;
  color: #b6b6b6;
`;
