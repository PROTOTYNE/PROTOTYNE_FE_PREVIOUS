import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 10px;
  margin-top: 60px;
  padding-bottom: 5px;
  overflow: auto;
`;
const CategoryImg = styled.img`
    width: 80px;
    height:80px;
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface Prop {
    path: string;
    title: string
    description: string;
}


export const Category = ({ path, title, description }: Prop) => {
    const navigate = useNavigate();
    return (
        <CategoryContainer onClick={() => navigate('/search', {state: {title}})}>
            <CategoryImg src={path} alt={description}/>
        </CategoryContainer>
    );
}

export const Categories = () => {
    return (
        <CategoriesContainer>
            <Category path="./image/beauty.svg" title="뷰티" description="beauty" />
            <Category path="./image/sport.svg" title="스포츠" description="sport" />
            <Category path="./image/food.svg" title="식품" description="food" />
            <Category path="./image/cloth.svg" title="의류" description="cloth" />
            <Category path="./image/electronicDevice.svg" title="전자기기" description="electronic devices" />
            <Category path="./image/toy.svg" title="장난감" description="toy" />
        </CategoriesContainer>
    );
}