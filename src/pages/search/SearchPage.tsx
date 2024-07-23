import { SearchContainer } from '@/entities';
import { SearchHeader, Searches } from '@/widget';
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
    left: 8%;
`;

const CancelIcon = styled(CancelRoundedIcon)`
    font-size: 20px;
    position: absolute;
    top: 30%;
    right: 8%;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 180px;

`;

export const RecentSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
`;


const SearchPage = ({}) => {
    const [isSearch, setIsSearch] = useState<string>('');
    const [isSearchList, setIsSearchList] = useState<string>(['마라탕 만두', '마라탕 만두', '마라탕 만두 마라탕 만두 마라탕 만두 마라탕 만두 마라탕 만두', '가나다라마바사']);

    const deleteSearch = () => {
        const searchInput = document.querySelector('input');
        if(searchInput !== null) {
            searchInput.value = '';
            setIsSearch('');
        }
    
    }

    const handleDeleteSearch = (name: string) => {
        setIsSearchList(isSearchList.filter((search) => search !== name));
    };
    
    const handleDeleteAll = () => {
        setIsSearchList([]);
    };
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
            <hr />
            {isSearchList.length !== 0 ? (
                <>
                    <SearchHeader onDeleteAll={handleDeleteAll} />
                    <RecentSearchContainer>
                        {(isSearchList).map((name: string) => (
                            <Searches key={name} name={name} onDeleteSearch={handleDeleteSearch}/>
                        ))}
                    </RecentSearchContainer>
                </>
            ) : (
                <Container>
                    체험해보고 싶은 시제품을 검색해보세요!
                </Container>
            )}
        </>
    );
}

export default SearchPage;