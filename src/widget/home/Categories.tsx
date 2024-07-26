import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import { useState } from "react";

const Title = styled.p`
    margin: 0px;
    font-size: 13px;
    font-weight: 400;
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 10px;
  padding-bottom: 5px;
  overflow: auto;
`;
const CategoryImg = styled.img`
    width: 60px;
    height: 60px;
    margin: 0px 10px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Prop {
    path: string;
    title: string
    description: string;
}


export const Category = ({ path, title, description }: Prop) => {
    const navigate = useNavigate();
    const [category, setCategory] = useState(title);
    return (
        <CategoryContainer onClick={() => navigate('/search', {state: {category}})}>
            <CategoryImg src={path} alt={description}/>
            <Title>{title}</Title>
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
            <Category path="./image/ElectronicDevices.svg" title="전자기기" description="electronic devices" />
            <Category path="./image/toy.svg" title="장난감" description="toy" />
        </CategoriesContainer>
    );
}