import styled from "@emotion/styled";

export const MultiSelectInput = ({
  label,
  options,
  onChange,
}: {
  label: string;
  options: { label: string; value: string | number }[];
  onChange: () => void;
}) => {
  return (
    <>
      <Label>{label}</Label>
      <Container>
        {options.map((option) => (
          <Button>{option.label}</Button>
        ))}
      </Container>
    </>
  );
};

const Label = styled.span`
  font-size: 16px;

  width: 90%;

  margin-top: 15px;
  margin-bottom: 8px;

  font-weight: bold;
`;

const Container = styled.div`
  width: 90%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Button = styled.div`
  display: flex;
  align-items: center;

  border-radius: 30px;
  height: 30px;
  color: #ffffff;
  background-color: #b9b9b9;

  padding-right: 20px;
  padding-left: 20px;

  margin-top: 7px;
  margin-right: 10px;
`;

const SelectButton = styled(Button)`
  background-color: #24446b;
`;
