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

const PrototypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #EEEEEE;
  border-radius: 16px;
  width: "170px";
  height: "270px";
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
    width: 35px;
    height: 35px;
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

export const Prototype = ({ prototype} : { prototype: PrototypeProp }) => {
    const [isBookmark, setIsBookmark] = useState(prototype.isBookmark);

    const handleBookmark = () => {
        setIsBookmark(!isBookmark);
    }
    return (
        <PrototypeContainer>
            <PrototypeImg src={prototype.path} alt={prototype.name} width="170px" height="170px" />
            <Application>{prototype.label}</Application>
            <InfoContainer>
                <InfoSubContainer>
                    <PrototypeName>{prototype.name.length > 10 ? prototype.name.substring(0, 8) + " ..." : prototype.name}</PrototypeName>
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

const MiniPrototypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: "20px";
    height: "290px";
    margin: 10px 8px;
`;
const InfoMiniContainer = styled.div`
    width: 100%;
`;

export const MiniPrototype = ({ prototype } : { prototype: PrototypeProp }) => {

    const [isBookmark, setIsBookmark] = useState(prototype.isBookmark);

    const handleBookmark = () => {
        setIsBookmark(!isBookmark);
    }
    return (
        <>
            <MiniPrototypeContainer>
                <PrototypeImg src={prototype.path} alt={prototype.name} width={"106px"} height={"106px"} />
                <InfoMiniContainer>
                    <PrototypeName>{prototype.name.length > 7 ? prototype.name.substring(0, 7) + ".." : prototype.name}</PrototypeName>
                    <TicketContainer>
                        <Ticket />
                        <Bookmark src={isBookmark?"./public/image/checkBookmark.svg":"./public/image/unCheckBookmark.svg"} onClick={handleBookmark}></Bookmark>
                    </TicketContainer>
                </InfoMiniContainer>
            </MiniPrototypeContainer>
        </>
    );
};