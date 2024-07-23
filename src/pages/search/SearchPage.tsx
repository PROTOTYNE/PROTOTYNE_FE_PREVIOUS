import { SearchContainer } from "@/entities";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import styled from "@emotion/styled";
import { useState } from "react";

const SearchInput = styled.input`
    border-radius: 7px;
    padding-left: 40px;
    margin: 9px 10px;
    width: 90%;
    height: 30px;
    border: none;
`;

const SearchIcon = styled(SearchRoundedIcon)`
    color: black;
    font-size: 24px;
    position: absolute;
    top: 28%;
    left: 5%;
`;

const CancelIcon = styled(CancelRoundedIcon)`
    font-size: 20px;
    position: absolute;
    top: 32%;
    right: 4%;
`;


const SearchPage = () => {
    const [isSearch, setIsSearch] = useState('');

    const deleteSearch = () => {
        const searchInput = document.querySelector('input');
        if(searchInput !== null) {
            searchInput.value = '';
            setIsSearch('');
        }
    
    }
    
    return (
        <>
            <SearchContainer>
                <SearchIcon />
                <SearchInput placeholder="검색하기" onChange={(e) => setIsSearch(e.target.value)} />
                {isSearch && (
                    <CancelIcon onClick={ deleteSearch }
                  />
                )}
            </SearchContainer>
        </>
    );
}

export default SearchPage;