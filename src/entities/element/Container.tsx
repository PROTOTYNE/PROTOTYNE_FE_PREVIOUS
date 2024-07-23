import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CenterContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: linear-gradient(to right, #3C435A 0%, #313131 51%, #937A6D 100%);
`;

export const IconContainer = styled.div`
  margin: 5px 10px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 10px;
`;
export const PrototypeContainer = styled.div`
  position: relative;
  width: 160px;
`;
export const PopularContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SubContainer = styled.h4`
  margin-bottom: 8px;
  margin-left: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 0px 10px;
  height: 50px;
  position: relative;
`;

export const SearchP = styled.p<{ transparency: string }>`
    margin: 5px 0px;
    font-weight: 500;
    opacity: ${props => props.transparency};
`;