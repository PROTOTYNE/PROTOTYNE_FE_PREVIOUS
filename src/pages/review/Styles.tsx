import styled from "@emotion/styled";

export const ScrollArea = ({ children }: { children: React.ReactNode }) => (
  <div style={{ position: "relative" }}>
    <ScrollBox>
      <ScrollContainer>{children}</ScrollContainer>
      <div style={{ height: "30px" }}></div>
    </ScrollBox>
  </div>
);

const ScrollBox = styled.div`
  position: absolute;

  left: 50%;
  transform: translate(-50%, 0%);

  background-color: red;

  width: calc(100% - 16px);
  top: 60px;
  height: 70vh;

  border-radius: 4px;

  overflow-y: scroll;

  padding-top: 20px;
  padding-left: 5px;
  padding-right: 5px;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #152662b7;

    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #dcdcdc;

    border-radius: 5px;
  }
`;

const ScrollContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
