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

  width: 332px;
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
  align-items: flex-start;
  flex-direction: column;
`;

export const Label = styled.div`
  margin-top: 30px;
  font-size: 17px;
  font-weight: bold;
`;

const ChoicesContainer = styled.div`
  width: 100%;

  margin-top: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ChoiceContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  input {
    display: none; /* 기본 체크박스 숨김 */
  }

  label {
    display: inline-flex;
    flex-direction: column;

    text-align: center;
  }

  label::before {
    content: "";
    width: 17px;
    height: 17px;

    border-radius: 50%; /* 원형으로 만듦 */
    border: 3px solid #c4c4c4;
    display: inline-block;
    position: relative;

    margin-bottom: 2px;
    margin-left: 1px;
  }

  input:checked + label::before {
    background-color: #667197;
  }

  input:checked + label::before::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    transform: translate(-50%, -50%);
  }
`;

export const MultiChoiceQuestion = ({
  index,
  label,
}: {
  index: number;
  label: string;
}) => (
  <>
    <Label>
      [{index}] {label}
    </Label>
    <ChoicesContainer>
      {[1, 2, 3, 4, 5].map((num) => (
        <ChoiceContainer>
          <input type="checkbox" id={`${num}`} />
          <label htmlFor={`${num}`}>{num}</label>
        </ChoiceContainer>
      ))}
    </ChoicesContainer>
  </>
);

export const SubjectiveQuestion = ({
  index,
  label,
}: {
  index: number;
  label: string;
}) => (
  <>
    <Label>
      [{index}] {label}
    </Label>
    <Textarea />
  </>
);

const Textarea = styled.textarea`
  width: calc(94% - 16px);
  height: 100px;

  position: relative;
  left: 2%;

  border: 2px solid #c4c4c4;
  border-radius: 10px;

  padding-left: 6px;
  padding-right: 6px;

  margin-top: 10px;
`;

export const ImageQuestion = ({
  index,
  label,
}: {
  index: number;
  label: string;
}) => (
  <>
    <Label>
      [{index}] {label}
    </Label>
    <ImageContainer>
      <ImageBlock src="/image/logo.png"></ImageBlock>
      <AddImageBlock>+</AddImageBlock>
    </ImageContainer>
  </>
);

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  justify-content: flex-start;

  margin-top: 8px;
`;

const ImageBlock = styled.div`
  width: 101px;
  height: 101px;

  background-image: url(${(props: { src: string }) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 10px;

  margin-right: 10px;
`;

const AddImageBlock = styled.div`
  width: 101px;
  height: 101px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;

  background-color: #d9d9d9;

  border-radius: 10px;

  color: white;
`;

export const Repurchase = () => (
  <RepurchaseContainer>
    <div>⭐ 재구매 의향이 있나요?</div>
    <RepurchaseChoiceContainer>
      <input type="checkbox" id="yes" />
      <label htmlFor="yes">있음</label>
      <input type="checkbox" id="no" />
      <label htmlFor="no">없음</label>
    </RepurchaseChoiceContainer>
  </RepurchaseContainer>
);

const RepurchaseContainer = styled.div`
  width: 90%;

  height: 40px;

  margin-top: 35px;

  font-size: 17px;
  font-weight: bold;
`;

const RepurchaseChoiceContainer = styled(ChoiceContainer)`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-top: 10px;

  font-weight: normal;

  label {
    flex-direction: row;
    margin-right: 10px;
  }

  label::before {
    margin-right: 10px;
  }
`;
