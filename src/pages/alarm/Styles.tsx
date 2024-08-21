import styled from "@emotion/styled";

export const Element = ({
  img,
  name,
  content,
  dateAgo,
}: {
  img: string;
  name: string;
  content: string;
  dateAgo: number;
}) => {
  return (
    <ElementContainer>
      <Img src={img} alt="alarm img" />
      <Content>
        <div>{name}</div>
        <span>{content}</span>
      </Content>
      <Time>{dateAgo === 0 ? "오늘" : `${dateAgo}일 전`}</Time>
    </ElementContainer>
  );
};

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
  margin-right: 5px;

  border-radius: 10px;

  object-fit: cover;

  background-color: #b6b6b6;
`;

const Content = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  font-weight: bold;

  font-size: 16px;

  > div {
    display: inline-block;
    width: 130%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > span {
    font-weight: normal;
    font-size: 15px;

    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-bottom: 20px;
  }
`;

const Time = styled.div`
  width: 60px;
  text-align: end;
  margin-top: 70px;

  font-size: 16px;
  color: #b6b6b6;
`;
