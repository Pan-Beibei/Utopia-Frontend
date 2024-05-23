import styled from "styled-components";
import { BaseFlex } from "../../styles/BaseStyles";
import { getFilter, setFilter } from "../../services/state/ForumSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const StyledContainer = styled(BaseFlex)`
  flex-grow: 1;
  gap: 1rem;

  background-color: ${(props) => props.theme.colors.gray300};
  border-radius: 3.6rem;
  padding: 0.5rem 1rem;

  letter-spacing: 0.7px;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  padding: 1rem;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  background-color: transparent;
  border: none;
`;

const StyledSearchButton = styled.button`
  padding: 0.6rem 0.8rem;
  min-width: 4.5rem;
  border: none;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.15);
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};

  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.primary};
`;

const StyledImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

function SearchPosts() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const { t } = useTranslation();

  const [inputSearch, setInputSearch] = useState(filter);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setInputSearch(e.target.value);
  }

  function handleSearchButton() {
    //当前只能搜索标题
    const search = inputSearch.trim();

    //如果搜索内容为空，并且过滤器也为空，则直接返回
    if (search.length === 0) {
      if (filter.length !== 0) {
        dispatch(setFilter(""));
      }
      return;
    }

    //搜索所有涵盖输入内容的帖子
    dispatch(
      setFilter(JSON.stringify({ title: { $regex: search, $options: "i" } }))
    );
  }

  return (
    <StyledContainer>
      <StyledImg src="/icons/search.svg" alt="Search posts" />
      <StyledInput
        placeholder={t("forum.searchPlaceolder")}
        value={inputSearch}
        onChange={handleSearch}
      />
      <StyledSearchButton onClick={handleSearchButton}>
        {t("forum.searchBtnText")}
      </StyledSearchButton>
    </StyledContainer>
  );
}

export default SearchPosts;
