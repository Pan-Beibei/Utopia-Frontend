import { useState } from "react";
import styled from "styled-components";
import { Socket } from "socket.io-client";
import { useSelector } from "react-redux";

import { MsgType } from "../../utils/APIRoutes";
import { getUserId } from "../user/userSlice";
import PrimaryButton from "../../ui/PrimaryButton";
import { ButtonTypes } from "../../enum/ButtonTypes";
import EmojiPicker from "../../ui/EmojiPicker";
import EmojiTextInput from "../../ui/EmojiTextInput";

const StyledBulletInputContainer = styled.div`
  position: relative;
  padding: 0 1rem;
  border-radius: 6rem;
  z-index: 100;
`;

const StyledFlex = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const StyledEmojiContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0;
`;

interface BulletInputTextProps {
  socket: React.RefObject<Socket | null>;
}

function BulletInputBox({ socket }: BulletInputTextProps) {
  const [inputContent, setInputContent] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const userId = useSelector(getUserId);

  function handleSendClick() {
    if (inputContent.length > 3) {
      if (socket.current) {
        socket.current.emit(MsgType.SEND_BULLET, {
          id: userId,
          msg: inputContent,
        });
        setInputContent("");
      } else {
        console.log("send-bullet: ", inputContent, "socket: ", socket.current);
      }
    }
  }

  return (
    <StyledBulletInputContainer>
      {showPicker && (
        <StyledEmojiContainer>
          <EmojiPicker setInputContent={setInputContent} />
        </StyledEmojiContainer>
      )}
      <StyledFlex>
        <EmojiTextInput
          inputContent={inputContent}
          setInputContent={setInputContent}
          showPicker={showPicker}
          setShowPicker={setShowPicker}
          placeholder="请输入弹幕..."
        />
        <PrimaryButton
          onClick={handleSendClick}
          type={ButtonTypes.SEND_BULLET_BUTTON}
        >
          <StyledFlex>
            发送
            <img src="./icons/fly.svg" alt="fly" />
          </StyledFlex>
        </PrimaryButton>
      </StyledFlex>
    </StyledBulletInputContainer>
  );
}

export default BulletInputBox;
