import { SearchP } from "@/entities";
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';

interface Prop{
    name: string;
    onClickSearch: (name: string) => void;
    onDeleteSearch: (name: string) => void;
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    margin-top: 6px;
`;
export const SearchName = styled.p`
  margin: 5px 0px;
  font-weight: 500;
  opacity: 100%;
  width: 300px;
`;
export const Searches = ({ name, onClickSearch, onDeleteSearch } : Prop) => {

    return (
        <Container>
            <SearchName onClick={() => onClickSearch(name)}>
                {name.length >= 20 ?
                name.substring(0, 15) + " ..." :
                name}
            </SearchName>
            <SearchP transparency="100%">
                <CloseIcon onClick={() => onDeleteSearch(name)}/>
            </SearchP>
        </Container>
    );
}