import styled from "styled-components";
import { useSelector } from "react-redux";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import InputBox from "./InputBox";
import { getUser } from "../../services/state/userSlice";

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
  const user = useSelector(getUser);
  if (!user) return null;

  return (
    <StyledContainer>
      <StyledTitle>基本信息</StyledTitle>
      <InputBox title="用户名" placeholder={user.username} disabled={true} />
      <InputBox title="电话" placeholder={user.phone} disabled={true} />
      {/* <InputBox title="星座" placeholder="魔羯座" disabled={true} />
      <InputBox title="性别" placeholder="女" disabled={true} />
      <InputBox title="生日" placeholder="2000/01/05" disabled={true} /> */}
    </StyledContainer>
  );
}

export default UserBasicInfo;
