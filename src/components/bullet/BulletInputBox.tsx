import { Suspense, useState } from "react";
import styled from "styled-components";
import { Socket } from "socket.io-client";
import toast from "react-hot-toast";
import { MsgType } from "../../config";
import PrimaryButton from "../ui/PrimaryButton";
import { ButtonTypes } from "../../enum/ButtonTypes";
// import EmojiPicker from "../EmojiPicker";
import EmojiTextInput from "../EmojiTextInput";
import { useFetchUser } from "../../hooks/useFetchUser";
import LazyEmojiPicker from "@/lazyComponents/LazyEmojiPicker";
import { StyledLoading } from "@/components/ui/Loading";

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
  const { user } = useFetchUser();

  function handleSendClick() {
    if (!user) {
      toast.error("请先登录");
      return;
    }
    const content = inputContent.trim();
    if (content.length === 0) {
      toast.error("请输入弹幕内容");
      return;
    }

    if (socket.current) {
      socket.current.emit(MsgType.SEND_BULLET, {
        id: user.id,
        msg: content,
      });

      setInputContent("");
      toast.success("弹幕已发送");
    } else {
      console.error("send-bullet: ", content, "socket: ", socket.current);
    }
  }

  return (
    <StyledBulletInputContainer>
      {showPicker && (
        <StyledEmojiContainer>
          {/* <EmojiPicker setInputContent={setInputContent} /> */}
          <Suspense fallback={<StyledLoading>Loading...</StyledLoading>}>
            <LazyEmojiPicker setInputContent={setInputContent} />
          </Suspense>
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
