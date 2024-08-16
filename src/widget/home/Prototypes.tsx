import { Prototype, MiniPrototype, BookmarkPrototype } from "@/entities/element/Prototype";
import styled from "@emotion/styled";


const Container = styled.div`
  display: flex;
  padding: 7px 8px 5px 8px;
  flex-wrap: wrap;
`;


interface PrototypeProp {
    id: 0,
    name: string, 
    thumbnailUrl: string, 
    investCount: 0, 
    reqTickets: 0,
}


export const Prototypes = ({ type, prototypes } : { type: string, prototypes: PrototypeProp[] }) => {
    return (
        <>
            <Container>
                {prototypes.map((prototype: PrototypeProp) => {
                    return (
                        type === "popular" ? 
                        <Prototype 
                        key={prototype.id}
                        prototype={prototype}
                        /> :
                        <MiniPrototype
                        key={prototype.id}
                        prototype={prototype}
                        />
                    );
                })}
            </Container>
        </>
    );
};

interface BookmarkProp {
    path: string,
    name: string,
    isBookmark: boolean,
}
export const BookmarkPrototypes = ({ prototype } : { prototype: BookmarkProp[] }) => {
    return (
        <Container>
            {(prototype).map((prototype: BookmarkProp) => (
                    <BookmarkPrototype 
                    key={prototype.path}
                    prototype={prototype}
                    />
                ))}
        </Container>
    );
};