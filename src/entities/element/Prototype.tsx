import { PrototypeImg, Bookmark } from "@/entities";
import { useState } from "react";
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
    width: 58%;
    height: 10%;
    padding-left: 3px;
    justify-content: center;
    position: absolute;
    top: 53%;
    left: 40%;
`;


const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 0px;
  padding: 20px 0px 0px 0px;
`;

const PrototypeContainer = styled.div<{ width: string, height: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #EEEEEE;
  border-radius: 16px;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 10px 8px;
`;

const TicketContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 6px;
    margin-top: 15px;
`;

const InfoSubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 6px;
`;
const TicketNeed = styled.div`
    color: #667197;
    font-size: 11px;
    padding-top: 14px;
`;
const TicketImg = styled.img`
    display: flex;
    width: 40px;
    height: 40px;
`;
const TicketImgContainer = styled.div`
    display: flex;
`;

interface PrototypeProp {
    path: string, 
    label: string, 
    name: string, 
    isBookmark: boolean,
}
const Ticket = () => {
    return (
        <TicketImgContainer>
            <TicketImg src="./public/image/ticket.svg" alt="ticket" />
            <div>x 2개</div>
        </TicketImgContainer>
    );
}

export const Prototype = ({ prototype, width, height } : { prototype: PrototypeProp, width: string, height: string }) => {
    const [isBookmark, setIsBookmark] = useState(prototype.isBookmark);

    const handleBookmark = () => {
        setIsBookmark(!isBookmark);
    }
    return (
        <PrototypeContainer width={width} height={height}>
            <PrototypeImg src={prototype.path} alt={prototype.name} />
            <Application>{prototype.label}</Application>
            <InfoContainer>
                <InfoSubContainer>
                    <PrototypeName>{prototype.name.length >= 8 ? prototype.name.substring(0, 8) + " ..." : prototype.name}</PrototypeName>
                    <Bookmark src={isBookmark?"./public/image/checkBookmark.svg":"./public/image/unCheckBookmark.svg"} onClick={handleBookmark}></Bookmark>
                </InfoSubContainer>
                <TicketContainer>
                    <TicketNeed>
                        필요한 티켓
                    </TicketNeed>
                    <Ticket />
                </TicketContainer>
            </InfoContainer>
        </PrototypeContainer>
    );
};