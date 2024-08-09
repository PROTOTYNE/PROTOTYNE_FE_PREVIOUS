import { SearchP } from "@/entities"
import styled from "@emotion/styled";

const RecentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 70px 10px 10px 10px;
    position: fixed;
    width: 370px;
`;

interface Prop {
    onDeleteAll: () => void;
}
export const SearchHeader = ({ onDeleteAll }: Prop) => {

    return (
        <RecentContainer>
            <SearchP transparency="100%">
                최근 검색어
            </SearchP>
            <SearchP transparency="30%" onClick={onDeleteAll}>
                지우기
            </SearchP>
        </RecentContainer>
    );
};