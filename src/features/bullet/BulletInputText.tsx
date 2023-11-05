import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Socket } from "socket.io-client";
import { MsgType } from "../../utils/APIRoutes";
import { getUserId } from "../user/userSlice";
import { useSelector } from "react-redux";
//
const StyledBulletInputContainer = styled.div<{ $height: number }>`
  ${(props) => css`
    top: ${props.$height - 50}px;
  `}
  padding: 0 1rem;
  position: fixed;
  left: 0;
  display: flex;
  width: 100%;
  align-items: center;
  // justify-content: center;
  gap: 1rem;
`;

const StyledInputText = styled.input`
  padding: 0.5rem 1rem;
  min-width: 25rem;
`;
const StyledButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: var(--primary-color);
  color: var(--primary-text);
  border: none;
`;

interface BulletInputTextProps {
  socket: React.RefObject<Socket | null>;
}

function BulletInputText({ socket }: BulletInputTextProps) {
  const [inputText, setInputText] = useState("");
  const userId = useSelector(getUserId);

  function handleSendClick() {
    if (inputText.length > 3) {
      if (socket.current) {
        socket.current.emit(MsgType.SEND_BULLET, {
          id: userId,
          msg: inputText,
        });
      } else {
        console.log("send-bullet: ", inputText, "socket: ", socket.current);
      }
    }
  }
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    // const inputText = e.target as Element;
    // console.log(e.target.value);
    setInputText(e.target.value);
  }

  return (
    <StyledBulletInputContainer $height={window.innerHeight}>
      <StyledInputText
        type="text"
        value={inputText}
        onChange={handleInputChange}
      ></StyledInputText>
      <StyledButton onClick={handleSendClick}>发送</StyledButton>
    </StyledBulletInputContainer>
  );
}

export default BulletInputText;
