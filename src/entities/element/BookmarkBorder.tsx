import styled from '@emotion/styled';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { StyledEngineProvider } from '@mui/material';

const StyledBookmark = styled(BookmarkBorderIcon)`
  position: fixed;
  bottom: 16px;
  left: 16px;
`
//북마크 하단 고정 불가...?
//누르면 내부 색 변하는 기능 추가

const Bookmark = () => {
  return (
    <StyledEngineProvider injectFirst>
      <StyledBookmark></StyledBookmark>
    </StyledEngineProvider>
  )
}

export default Bookmark;