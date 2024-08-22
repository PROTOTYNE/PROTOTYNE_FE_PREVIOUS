import { SearchHeader, Searches } from "@/widget";
import { MiniPrototype } from "@/entities";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { SearchService } from "@/shared";

const searchService = SearchService();

const SearchInput = styled.input`
  border-radius: 7px;
  padding-left: 45px;
  margin: 11px 10px;
  width: 100%;
  height: 30px;
  border: none;
  padding-right: 50px;
`;

const SearchIcon = styled(SearchRoundedIcon)`
  color: black;
  font-size: 25px;
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
  background: linear-gradient(to right, #7995b2 0%, #476090 51%, #0d1b4a 100%);
  padding: 0px 10px;
  height: 54px;
  width: 100%;
  position: relative;
`;
const SearchContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  hight: 54px;
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

  margin: 0px 0px 0px 10px;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 70px;
  padding: 10px 0px;
  border-top: 1px solid #c3c3c3;
  border-bottom: 1px solid #c3c3c3;
`;

interface PrototypeProp {
  id: 0;
  name: string;
  thumbnailUrl: string;
  reqTickets: 0;
  dday: 0;
  bookmark: true;
}

const SearchPage = ({}) => {
  const location = useLocation();
  const [search, setSearch] = useState<string>(() =>
    location.state && location.state.title ? location.state.title : ""
  );
  const [recentSearch, setRecentSearch] = useState<string[]>([]);
  const [searchList, setSearchList] = useState<PrototypeProp[]>([]);
  const [result, setResult] = useState<string>(() =>
    location.state && location.state.title ? location.state.title : ""
  );
  const navigate = useNavigate();

  // 최근 검색 기록 불러오기
  const fetchRecentSearch = async () => {
    const searchList = await searchService.getSearchList();
    return searchList;
  };

  // 상품 불러오기
  const fetchProduct = async (code: string) => {
    const product = await searchService.getSearchProduct(code);
    return product;
  };

  // 카테고리 상품 불러오기
  const fetchCategoryProduct = async (code: string) => {
    const categoryList = await searchService.getCategoryList(code);
    return categoryList;
  };

  useEffect(() => {
    fetchRecentSearch().then((searchList) => setRecentSearch(searchList));
  }, [result]);

  useEffect(() => {
    if (location.state && location.state.title) {
      fetchCategoryProduct(search).then((product) => setSearchList(product));
    }
  }, [location.state]);

  const deleteInput = () => {
    const searchInput = document.querySelector("input");
    if (searchInput !== null) {
      searchInput.value = "";
      setSearch("");
      setResult("");
    }
  };

  const handleDeleteSearch = (name: string) => {
    setRecentSearch(recentSearch.filter((search) => search !== name));
    searchService.deleteSearchList(name);
  };

  const onClickSearch = (name: string) => {
    setSearch(name);
    setResult(name);
    const searchInput = document.querySelector("input");
    if (searchInput) {
      searchInput.value = name;
    }
    fetchProduct(name).then((product) => setSearchList(product));
  };
  const handleDeleteAll = () => {
    setRecentSearch([]);
    searchService.deleteAllSearch();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.currentTarget.value !== "") {
      setSearch(event.currentTarget.value);
      if (event.key === "Enter") {
        setResult(event.currentTarget.value);
        if (result != "") {
          fetchProduct(result).then((product) => setSearchList(product));
        }
        console.log(result)
      }
    }
  };

  return (
    <>
      <SearchContainer>
        <BackgoundContainer>
          <SearchIcon />
          <SearchInput
            defaultValue={
              search ? (location.state ? `#${search}` : `${search}`) : ""
            }
            placeholder="검색하기"
            onKeyDown={handleKeyDown}
          />
          {search && <CancelIcon onClick={deleteInput} />}
          <Cancel
            onClick={() => {
              navigate("/home");
            }}
          >
            취소
          </Cancel>
        </BackgoundContainer>
      </SearchContainer>
      {result ? (
        <>
          <Info>
            '{result.length >= 6 ? search.substring(0, 6) + "..." : result}'에
            대한 {searchList.length}개의 시제품이 조회되었습니다.
          </Info>
          <br />
          <SearchListContainer>
            {searchList.map((prototype: PrototypeProp) => (
              <MiniPrototype key={prototype.id} prototype={prototype} />
            ))}
          </SearchListContainer>
        </>
      ) : recentSearch.length !== 0 ? (
        <>
          <SearchHeader onDeleteAll={handleDeleteAll} />
          <RecentSearchContainer>
            {recentSearch.map((name: string) => (
              <Searches
                key={name}
                name={name}
                onClickSearch={onClickSearch}
                onDeleteSearch={handleDeleteSearch}
              />
            ))}
          </RecentSearchContainer>
        </>
      ) : (
        <Container>체험해보고 싶은 시제품을 검색해보세요!</Container>
      )}
    </>
  );
};

export default SearchPage;
