import { PrototypeImg, Bookmark } from "@/entities";
import styled from "@emotion/styled";

const PrototypeName = styled.p`
    font-weight: 500;
    margin: 0px 0px 1px 0px;
`;



const Application = styled.div`
    background-color: #6482EB;
    color: white;
    font-weight: bold;
    font-size: 15px;
    border-radius: 7px;
    width: 74%;
    text-align: center;
    position: absolute;
    top: 64%;
    left: 26%;
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
    width: string;
    height: string;
}


const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`;
const SubContainer = styled.h4`
  margin-bottom: 8px;
  margin-left: 10px;
`;
const PrototypeContainer = styled.div<{ width: string, height: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 0px 8px;
`;

const ImageContainer = styled.div`
  position: relative;
`;
interface PrototypeProp {
    path: string, 
    label: string, 
    name: string, 
}
export const Prototype = ({ path, label, name, width, height } : Prop) => {

    return (
        <PrototypeContainer width={width} height={height}>
            <ImageContainer>
                <PrototypeImg src={path} alt={name} />
                <Application>{label}</Application>
                <Bookmark position="absolute" top="10%" left="70%" />
            </ImageContainer>
            <InfoContainer>
                <PrototypeName>{name.length >= 15 ? name.substr(0, 15) + " ..." : name}</PrototypeName>
                <Ticket>티켓 X 2</Ticket>
            </InfoContainer>
        </PrototypeContainer>
    );
};

export const Prototypes = ({ type, prototype } : { type: string, prototype: PrototypeProp[] }) => {
    return (
        <>
            <SubContainer>{type}</SubContainer>
            <Container>
                {(prototype).map((prototype: PrototypeProp) => (
                    <Prototype 
                    key={prototype.name} 
                    path={prototype.path} 
                    label={prototype.label} 
                    name={prototype.name} 
                    width={type !== "지금 인기있는 시제품입니다!" ? "100px" : "150px"} 
                    height={type !== "지금 인기있는 시제품입니다!" ? "190px" : "240px"} 
                    />
                ))}
            </Container>
        </>
    );
};