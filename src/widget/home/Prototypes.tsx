import { PrototypeImg } from "@/entities";
import styled from "@emotion/styled";

const PrototypeName = styled.p`
    font-weight: 500;
    margin-bottom: 1px;
`;



const Application = styled.div`
    background-color: #6482EB;
    color: white;
    font-weight: bold;
    border-radius: 7px;
    width: 110px;
    text-align: center;
    position: absolute;
    top: 46%;
    left: 37.5%;
`;
const Ticket = styled.div`
    color: #6482EB;
    margin-top: 0px;
    text-align: right;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 5px;
  overflow: auto;
`;

interface Prop {
    path: string;
    label: string;
    name: string;
}


export const PrototypeContainer = styled.div`
  position: relative;
  width: 160px;
  margin: 0px 13px;
`;
const SubContainer = styled.h4`
  margin-bottom: 8px;
  margin-left: 10px;
`;


interface PrototypeProp {
    path: string, 
    label: string, 
    name: string, 
}
export const Prototype = ({ path, label, name } : Prop) => {

    return (
        <PrototypeContainer>
            <PrototypeImg src={path} alt={name} />
            <Application>{label}</Application>
            <PrototypeName>{name}</PrototypeName>
            <Ticket>티켓 X 2</Ticket>
        </PrototypeContainer>
    );
};

export const Prototypes = ({ type, prototype } : { type: string, prototype: PrototypeProp[] }) => {
    return (
        <>
            <SubContainer>{type}</SubContainer>
            <Container>
                {(prototype).map((prototype: PrototypeProp) => (
                    <Prototype key={prototype.name} path={prototype.path} label={prototype.label} name={prototype.name}/>
                ))}
            </Container>
        </>
    );
};