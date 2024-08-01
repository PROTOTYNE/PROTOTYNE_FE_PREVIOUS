import styled from "@emotion/styled";
import Select, { StylesConfig } from "react-select";

const customStyles: StylesConfig<
  { label: string; value: string | number },
  false
> = {
  control: (provided, state) => ({
    ...provided,

    width: "160px",

    textAlign: "center",
    color: "#ffffff",
    fontSize: "17px",

    border: "0px solid #B9B9B9",
    borderRadius: "10px",
    backgroundColor: state.hasValue ? "#667197" : "#B9B9B9",
    appearance: "none",
    boxShadow: "none",
    cursor: "pointer",

    "&:focus": {
      backgroundColor: "#B9B9B9",
    },
  }),

  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#fff" : "#667197",
    backgroundColor: state.isSelected ? "#667197" : "#fff",
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

  placeholder: (provided) => ({ ...provided, color: "#ffffff" }),
};

export const SelectInput = ({
  label,
  option,
  onChange,
}: {
  label: string;
  option: { label: string; value: string | number }[];
  onChange: () => void;
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

  width: 95%;

  margin-top: 10px;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-size: 20px;
  font-weight: bold;

  margin-bottom: 2px;
`;
