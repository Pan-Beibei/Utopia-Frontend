import styled from "styled-components";
import { useState } from "react";
import { BaseFlex } from "../../styles/BaseStyles";
import NotificationReplyList from "../../components/Notification/NotificationReplyList";
import NotificationLikeList from "../../components/Notification/NotificationLikeList";
import NotificationSystemList from "../../components/Notification/NotificationSystemList";
import { useTranslation } from "react-i18next";

const StyledContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledTabList = styled(BaseFlex)`
  justify-content: start;
  gap: 2rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const StyledTabBtn = styled.button<{ $selected: boolean }>`
  padding: 1.2rem 0;
  min-width: 6.3rem;
  border: none;
  background-color: transparent;
  border-bottom: ${(props) =>
    props.$selected ? `2px solid ${props.theme.colors.black}` : "none"};

  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) =>
    props.$selected ? props.theme.colors.black : props.theme.colors.gray400};
`;

const StyledTabContent = styled.div`
  padding: 2rem 1rem;
`;

function NotificationView() {
  const [activeTab, setActiveTab] = useState("replies");
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledTabList>
        <StyledTabBtn
          $selected={activeTab === "replies"}
          onClick={() => setActiveTab("replies")}
        >
          {t("personalCenter.replyMe")}
        </StyledTabBtn>
        <StyledTabBtn
          $selected={activeTab === "likes"}
          onClick={() => setActiveTab("likes")}
        >
          {t("personalCenter.likeMe")}
        </StyledTabBtn>

        <StyledTabBtn
          $selected={activeTab === "system"}
          onClick={() => setActiveTab("system")}
        >
          {t("personalCenter.systemNotification")}
        </StyledTabBtn>
      </StyledTabList>
      <StyledTabContent>
        {activeTab === "replies" && <NotificationReplyList />}
        {activeTab === "likes" && <NotificationLikeList />}
        {activeTab === "system" && <NotificationSystemList />}
      </StyledTabContent>
    </StyledContainer>
  );
}

export default NotificationView;
