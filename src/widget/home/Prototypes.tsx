import { Prototype, MiniPrototype, BookmarkPrototype } from "@/entities/element/Prototype";
import styled from "@emotion/styled";


const Container = styled.div`
  display: flex;
  padding: 7px 8px 5px 8px;
  flex-wrap: wrap;
  justify-content: space-between;
`;


interface PrototypeProp {
    path: string, 
    label: string, 
    name: string, 
    isBookmark: boolean,
}

export const Prototypes = ({ type, prototype } : { type: string, prototype: PrototypeProp[] }) => {
    return (
        <>
            <Container>
                {(prototype).map((prototype: PrototypeProp) => (
                    type === "popular" ? 
                    <Prototype 
                    key={prototype.name}
                    prototype={prototype}
                    /> :
                    <MiniPrototype
                    key={prototype.name}
                    prototype={prototype}
                    />
                ))}
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
                    key={prototype.name}
                    prototype={prototype}
                    />
                ))}
        </Container>
    );
};