import { useState } from "react";
import styled from "styled-components";
import { Socket } from "socket.io-client";
import { useSelector } from "react-redux";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { MsgType } from "../../utils/APIRoutes";
import { getUserId } from "../user/userSlice";
import PrimaryButton from "../../ui/PrimaryButton";
import { ButtonTypes } from "../../enum/ButtonTypes";

interface EmojiData {
  id: string;
  name: string;
  native: string;
  // 其他可能的属性...
}

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

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.gray};
  gap: 0.1rem;
  padding: 0.4rem 1.6rem;
  min-height: 4rem;
  border-radius: 6rem;
  flex: 1;
`;

const StyledInputText = styled.input`
  flex: 1;
  max-width: 70%;
  padding: 0.5rem;
  border: none;
  background-color: transparent;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.white};
  &::placeholder {
    color: ${(props) => props.theme.colors.white};
  }
`;

const StyledEmojiButton = styled.div`
  font-size: 1.2rem;
  padding: 2px;
  margin-left: 8px;
`;

const StyledEmojiContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0;
`;

interface BulletInputTextProps {
  socket: React.RefObject<Socket | null>;
}

function BulletInputText({ socket }: BulletInputTextProps) {
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
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputContent(e.target.value);
  }

  return (
    <StyledBulletInputContainer>
      {showPicker && (
        <StyledEmojiContainer>
          <Picker
            data={data}
            onEmojiSelect={(emoji: EmojiData) => {
              setInputContent((prevContent) => prevContent + emoji.native);
            }}
            emojiSize={20}
            emojiButtonSize={30}
            previewPosition="none"
            navPosition="none"
            perLine={8}
          />
        </StyledEmojiContainer>
      )}

      <StyledFlex>
        <StyledInputContainer>
          <StyledInputText
            type="text"
            value={inputContent}
            onChange={handleInputChange}
            placeholder="请输入弹幕..."
          ></StyledInputText>
          <StyledEmojiButton onClick={() => setShowPicker(!showPicker)}>
            <img src="./icons/emoji.svg" alt="emoji" />
          </StyledEmojiButton>
        </StyledInputContainer>
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

export default BulletInputText;
