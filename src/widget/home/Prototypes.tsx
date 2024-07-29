import { PrototypeImg } from "@/entities";
import styled from "@emotion/styled";

const PrototypeName = styled.p`
    font-weight: bold;
    font-size: 16px;
    margin: 0px;
`;



const Application = styled.div`
    display: flex;
    background-color: #24446B;
    color: white;
    clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%);
    font-weight: bold;
    font-size: 15px;
    width: 60%;
    height: 10%;
    padding-left: 2px;
    justify-content: center;
    position: absolute;
    top: 52%;
    left: 39%;
`;

const Container = styled.div`
  display: flex;
  padding-bottom: 5px;
`;


const InfoContainer = styled.div`
  display: flex;
  background-color: #EEEEEE;
  width: 163px;
  height: 50px;
  flex-direction: column;
  margin: 0px;
  position: absolute;
  z-index: -1;
  top: 56%;
  padding: 30px 0px 10px 8px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
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

interface PrototypeProp {
    path: string, 
    label: string, 
    name: string, 
    isBookmark: string,
}
export const Prototype = ({ prototype, width, height } : { prototype: PrototypeProp, width: string, height: string }) => {

    return (
        <PrototypeContainer width={width} height={height}>
            <div>
                <PrototypeImg src={prototype.path} alt={prototype.name} />
                <Application>{prototype.label}</Application>
            </div>
            <InfoContainer>
                <PrototypeName>{prototype.name.length >= 8 ? prototype.name.substring(0, 8) + " ..." : prototype.name}</PrototypeName>
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
                    prototype={prototype}
                    width={type !== "지금 인기있는 시제품입니다!" ? "110px" : "170px"} 
                    height={type !== "지금 인기있는 시제품입니다!" ? "190px" : "290px"}
                    />
                ))}
            </Container>
        </>
    );
};