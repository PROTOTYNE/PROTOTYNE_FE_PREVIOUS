import styled from "@emotion/styled";
import Select, { StylesConfig, SingleValue } from "react-select";

const customStyles: StylesConfig<
  { label: string; value: string | number },
  false
> = {
  control: (provided, state) => ({
    ...provided,

    width: "150px",
    minHeight: "30px",
    height: "30px",

    textAlign: "center",
    color: "#ffffff",
    fontSize: "15px",

    border: "0px solid #B9B9B9",
    borderRadius: "30px",
    backgroundColor: state.hasValue ? "#24446B" : "#B9B9B9",
    appearance: "none",
    boxShadow: "none",
    cursor: "pointer",

    "&:focus": {
      backgroundColor: "#B9B9B9",
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    height: "30px",
  }),

  input: (provided) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "30px",
  }),

  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#fff" : "#24446B",
    backgroundColor: state.isSelected ? "#24446B" : "#fff",
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "5px",
    overflow: "hidden",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "#ffffff",
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#ffffff",
    padding: "0 3px",
  }),
};

export const SelectInput = ({
  label,
  option,
  onChange,
}: {
  label: string;
  option: { label: string; value: string | number }[];
  onChange: (
    newValue: SingleValue<{ label: string; value: string | number }>
  ) => void;
}) => (
  <Container>
    <Label>{label}</Label>
    <Select
      options={option}
      styles={customStyles}
      placeholder="미선택"
      components={{
        IndicatorSeparator: () => null,
      }}
      onChange={onChange}
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 90%;

  margin-top: 10px;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-size: 16px;

  margin-bottom: 2px;

  font-weight: bold;
`;
