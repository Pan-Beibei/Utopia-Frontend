import styled from "styled-components";
import { useDispatch } from "react-redux";
import PostSearch from "./PostSearch";
import { BaseFlex } from "../../styles/BaseStyles";
import { useFetchUser } from "../../hooks/useFetchUser";
import { setIsCreatePostVisible } from "../../services/state/ForumSlice";
import { useTranslation } from "react-i18next";

const StyledPostButton = styled.button`
  padding: 1.2rem 1.6rem;
  min-width: 6.3rem;
  border: none;

  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
`;

const StyledContainer = styled(BaseFlex)`
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;

function PostControlPanel() {
  const { user } = useFetchUser();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  let isShow = false;
  if (user) {
    isShow = user.roles.includes("admin") || user.roles.includes("vip_user");
  }

  return (
    <StyledContainer>
      <PostSearch />
      {isShow && (
        <StyledPostButton
          onClick={() => dispatch(setIsCreatePostVisible(true))}
        >
          {t("forum.newThread")}
        </StyledPostButton>
      )}
    </StyledContainer>
  );
}

export default PostControlPanel;
