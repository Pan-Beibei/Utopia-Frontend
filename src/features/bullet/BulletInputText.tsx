import React, { ReactNode, useState } from "react";
import { Socket } from "socket.io-client";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Input, Button } from "@mui/material";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { MsgType } from "../../utils/APIRoutes";
import { getUserId } from "../user/userSlice";

interface EmojiData {
  id: string;
  name: string;
  native: string;
  // 其他可能的属性...
}

const StyledBulletInputContainer = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={(theme) => ({
      border: `1px solid ${theme.palette.divider}`,
      position: "relative",
      padding: "0 0.5rem",
      borderRadius: theme.shape.borderRadius,
      boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2)",
      zIndex: 100,
    })}
  >
    {children}
  </Box>
);

const FlexRow = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    }}
  >
    {children}
  </Box>
);

const StyledInputText = ({ ...props }) => (
  <Input
    {...props}
    sx={{
      flexGrow: 1,
      flexShrink: 1,
      maxWidth: "70%",
      padding: "0.5rem",
    }}
  />
);

const StyledButton = ({
  children,
  onClick,
  ...props
}: {
  children?: ReactNode;
  onClick: () => void;
}) => (
  <Button
    {...props}
    onClick={onClick}
    sx={{
      fontSize: "1.2rem",
      padding: "2px",
      marginLeft: "8px",
    }}
  >
    {children}
  </Button>
);

const EmojiButton = ({
  children,
  onClick,
  ...props
}: {
  children?: ReactNode;
  onClick: () => void;
}) => (
  <Button
    {...props}
    onClick={onClick}
    sx={{
      fontSize: "1.2rem",
      padding: "2px",
      marginLeft: "8px",
    }}
  >
    {children}
  </Button>
);

const EmojiContainer = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      position: "absolute",
      bottom: "3rem",
      left: 0,
    }}
  >
    {children}
  </Box>
);

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
        <EmojiContainer>
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
        </EmojiContainer>
      )}

      <FlexRow>
        <StyledInputText
          type="text"
          value={inputContent}
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
