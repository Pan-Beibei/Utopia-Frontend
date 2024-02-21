import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import InputBox from "./InputBox";
import { useFetchUser } from "../../hooks/useFetchUser";

const StyledContainer = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

const StyledTitle = styled.h2`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

function UserBasicInfo() {
  const { user } = useFetchUser();
  if (!user) {
    return null;
  }

  return (
    <StyledContainer>
      <StyledTitle>基本信息</StyledTitle>
      <InputBox title="用户名" placeholder={user.username} disabled={true} />
      <InputBox title="生日" placeholder={user.birthday} disabled={true} />
      <InputBox
        title="性别"
        placeholder={user.gender === "0" ? "女" : "男"}
        disabled={true}
      />
      <InputBox title="电话" placeholder={user.phone} disabled={true} />
    </StyledContainer>
  );
}

export default UserBasicInfo;
