import { SearchHeader, Searches } from '@/widget';
import { MiniPrototype } from '@/entities';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router';
import { SearchService } from '@/shared';

const searchService = SearchService();

const SearchInput = styled.input`
    border-radius: 7px;
    padding-left: 45px;
    margin: 13px 10px;
    width: 100%;
    height: 40px;
    border: none;
    padding-right: 50px;
`;

const SearchIcon = styled(SearchRoundedIcon)`
    color: black;
    font-size: 30px;
    position: absolute;
    top: 28%;
    left: 8%;
`;

const CancelIcon = styled(CancelRoundedIcon)`
    font-size: 20px;
    position: absolute;
    top: 34%;
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
  position: fixed;
  width: 370px;
  top: 100px;
  height: 740px;
  overflow: auto;
`;

const BackgoundContainer = styled.div`
  display: flex;
  background: linear-gradient(to right, #7995B2 0%, #476090 51%, #0D1B4A 100%);
  padding: 0px 10px;
  height: 70px;
  width: 100%;
  position: relative;
`;
const SearchContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
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
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 85px;
    padding: 10px 0px;
    border-top: 1px solid #C3C3C3;
    border-bottom: 1px solid #C3C3C3;
`;



interface PrototypeProp {
    id: 0;
    name: string;
    thumbnailUrl: string;
    reqTickets: 0;
    dday: 0;
};

const SearchPage = ({}) => {
    const location = useLocation();
    const [search, setSearch] = useState<string>(() => (location.state && location.state.title ? location.state.title : ''));
    const [recentSearch, setRecentSearch] = useState<string[]>([]);
    const [searchList, setSearchList] = useState<PrototypeProp[]>([]);
    const navigate = useNavigate();

    const fetchRecentSearch = async () => {
        const searchList = await searchService.getSearchList();
        return searchList;
    }

    useEffect(() => {
        fetchRecentSearch()
        .then(searchList => setRecentSearch(searchList));
    }, [])

    const fetchProduct = async (code: string) => {
        const product = await searchService.getSearchProduct(code);
        return product;
    };

    // useEffect(() => {
    //     fetchProduct(search)
    //     .then(product => setSearchList(product));
    // }, [search]);


    const deleteInput = () => {
        const searchInput = document.querySelector('input');
        if(searchInput !== null) {
            searchInput.value = '';
            setSearch('');
        }
    
    }

    const handleDeleteSearch = (name: string) => {
        setRecentSearch(recentSearch.filter((search) => search !== name));
        searchService.deleteSearchList(name);
    };
    
    const handleDeleteAll = () => {
        setRecentSearch([]);
        searchService.deleteAllSearch();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setSearch(event.currentTarget.value);
            fetchProduct(search).then(product => setSearchList(product));
        }
    };

    return (
        <>
        <SearchContainer>
            <BackgoundContainer>
                <SearchIcon />
                <SearchInput defaultValue={search ? `#${search}` : ''} placeholder="검색하기" onKeyDown={handleKeyDown}
                />
                {search && (
                    <CancelIcon onClick={ deleteInput }
                  />
                )}
                <Cancel onClick={() => {navigate("/home")}}>
                    취소
                </Cancel>
            </BackgoundContainer>
        </SearchContainer>
            {
                search ? (
                    <>
                        <Info>
                            '{search.length >= 6 ? search.substring(0, 6) + '...' : search}'에 대한 {searchList.length}개의 시제품이 조회되었습니다.
                        </Info>
                        <br />
                        <SearchListContainer>
                            {searchList.map((prototype: PrototypeProp) => (
                                <MiniPrototype 
                                key={prototype.name}
                                prototype={prototype}
                                />
                            ))}
                        </SearchListContainer>
                    </>
                ) : (
                    recentSearch.length !== 0 ? (
                        <>
                            <SearchHeader onDeleteAll={handleDeleteAll} />
                            <RecentSearchContainer>
                                {(recentSearch).map((name: string) => (
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