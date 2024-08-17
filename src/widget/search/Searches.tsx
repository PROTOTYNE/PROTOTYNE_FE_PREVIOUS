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
export const Searches = ({ name, onClickSearch, onDeleteSearch } : Prop) => {

    return (
        <Container onClick={() => onClickSearch(name)}>
            <SearchP transparency="100%">
                {name.length >= 20 ?
                name.substring(0, 15) + " ..." :
                name}
            </SearchP>
            <SearchP transparency="100%">
                <CloseIcon onClick={() => onDeleteSearch(name)}/>
            </SearchP>
        </Container>
    );
}