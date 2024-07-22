import { PopularContainer, PrototypeImg, PrototypeContainer, SubContainer } from "@/entities";
import styled from "@emotion/styled";

const PrototypeName = styled.p`
    font-weight: 500;
    margin-bottom: 5px;
`;



const Application = styled.div`
    background-color: #6482EB;
    color: white;
    font-weight: bold;
    border-radius: 10%;
    width: 110px;
    text-align: center;
    position: absolute;
    top: 46%;
    left: 28%;
`;
const Ticket = styled.div`
    color: #6482EB;
    margin-top: 0px;
    text-align: right;
`;

interface Prop {
    path: string;
    application: string;
    name: string;
}

export const Prototype = ({ path, application, name } : Prop) => {

    return (
        <PrototypeContainer>
            <PrototypeImg src={path} alt={name} />
            <Application>{application}</Application>
            <PrototypeName>{name}</PrototypeName>
            <Ticket>티켓 X 2</Ticket>
        </PrototypeContainer>
    );
};

export const Prototypes = ({ type } : { type: string }) => {
    return (
        <>
            <SubContainer>{type}</SubContainer>
            <PopularContainer>
                <Prototype path="./image/logo.jpg" application="100명 신청" name="마라탕후루 만두 마라맛 확인 시제품"/>
                <Prototype path="./image/logo.jpg" application="50명 신청" name="마라탕후루 만두 마라맛 확인"/>
            </PopularContainer>
        </>
    );
};