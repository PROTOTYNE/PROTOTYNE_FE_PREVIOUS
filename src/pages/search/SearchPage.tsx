import { SearchHeader, Searches, Prototype } from '@/widget';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router';

const SearchInput = styled.input`
    border-radius: 7px;
    padding-left: 40px;
    margin: 9px 10px;
    width: 100%;
    height: 30px;
    border: none;
    padding-right: 50px;
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
    right: 17%;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 180px;

`;

const RecentSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  background-color: black;
  padding: 0px 10px;
  height: 50px;
  position: relative;
`;
const Cancel = styled.div`
  width: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Info = styled.div`
    display: flex;
    justify-content: center;
`;


interface PrototypeProp {
    path: string, 
    label: string, 
    name: string, 
    isBookmark: string,
};
const SearchPage = ({}) => {
    const location = useLocation();
    const [isSearch, setIsSearch] = useState<string>(() => (location.state && location.state.category ? location.state.category : ''));
    const [isSearchList, setIsSearchList] = useState<string[]>(['마라탕 만두', '마라탕 만두2', '마라탕 만두 마라탕 만두 마라탕 만두 마라탕 만두 마라탕 만두', '가나다라마바사']);
    const [searchList, setSearchList] = useState<PrototypeProp[]>([
        {path: "./image/temp.svg", label: "", name: "마라탕후루 만두 마라맛 확인 시제품", isBookmark: "true" }, 
                    {path: "./image/temp.svg", label: "", name: "마라탕후루 만두 마라맛 확인", isBookmark: "true" }, 
                    {path: "./image/temp.svg", label: "", name: "마라탕후루 만두 마라맛 확인2", isBookmark: "true" }
    ]);

    const navigate = useNavigate();

    const deleteInput = () => {
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
                <SearchInput defaultValue={isSearch ? `#${isSearch}` : ''} placeholder="검색하기" onChange={(e) => {
                    setIsSearch(e.target.value);
                } 
                }/>
                {isSearch && (
                    <CancelIcon onClick={ deleteInput }
                  />
                )}
                <Cancel onClick={() => {navigate("/home")}}>
                    취소
                </Cancel>
            </SearchContainer>
            <hr />
            {
                isSearch ? (
                    <>
                    <Info>
                        '{isSearch.length >= 6 ? isSearch.substring(0, 6) + '...' : isSearch}'에 대한 '{searchList.length}'개의 시제품이 조회되었습니다.
                    </Info>
                    <hr />
                    <br />
                        <SearchListContainer>
                            {searchList.map((prototype: PrototypeProp) => (
                                <Prototype 
                                key={prototype.name}
                                prototype={prototype}
                                width="170px" 
                                height="100%"
                                />
                            ))}
                        </SearchListContainer>
                    </>
                ) : (
                    isSearchList.length !== 0 ? (
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
                    )
                )
            }
            
        </>
    );
}

export default SearchPage;