import styled from "styled-components";

export const BaseFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BaseColumnFlex = styled(BaseFlex)`
  flex-direction: column;
`;
