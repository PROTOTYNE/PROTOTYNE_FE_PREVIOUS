import styled from "@emotion/styled";
import { CategoryImg, CategoriesContainer, CategoryContainer } from "@/entities"


const Title = styled.p`
    margin: 0px;
    font-size: 13px;
    font-weight: 400;
`;

interface Prop {
    path: string;
    title: string
    description: string;
}

export const Category = ({ path, title, description }: Prop) => {
    return (
        <CategoryContainer>
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