import React, { useState } from "react";
import styled from "styled-components";
import { Socket } from "socket.io-client";
import { useSelector } from "react-redux";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { MsgType } from "../../utils/APIRoutes";
import { getUserId } from "../user/userSlice";

//
const StyledBulletInputContainer = styled.div`
  border: 1px solid #ccc;
  position: sticky;
  top: 10rem;
  padding: 0 0.5rem;
  z-index: 100;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledInputText = styled.input`
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 70%;
`;
const StyledButton = styled.button`
  padding: 2px;
`;

const EmojiButton = styled.button`
  padding: 2px;
`;

const EmojiContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
`;

interface BulletInputTextProps {
  socket: React.RefObject<Socket | null>;
}

function BulletInputText({ socket }: BulletInputTextProps) {
  const [inputText, setInputText] = useState("");
  const [showPicker, setShowPicker] = useState(false);
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
    setInputText(e.target.value);
  }

  return (
    <StyledBulletInputContainer>
      {showPicker && (
        <EmojiContainer>
          <Picker
            data={data}
            onEmojiSelect={console.log}
            emojiSize={20}
            emojiButtonSize={30}
            previewPosition="none"
            navPosition="none"
            perLine={8}
          />
        </EmojiContainer>
      )}

      <FlexRow>
        <StyledInputText
          type="text"
          value={inputText}
          onChange={handleInputChange}
        ></StyledInputText>
        <EmojiButton onClick={() => setShowPicker(!showPicker)}>
          表情
        </EmojiButton>
        <StyledButton onClick={handleSendClick}>发送</StyledButton>
      </FlexRow>
    </StyledBulletInputContainer>
  );
}

export default BulletInputText;
