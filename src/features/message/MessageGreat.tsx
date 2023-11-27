import { useState, useEffect } from "react";
import { Avatar, Typography } from "@mui/material";

interface MessageGreatProps {
  messages: { name: string; message: string }[];
}

function MessageGreat({ messages }: MessageGreatProps) {
  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomFontSize = () => Math.floor(Math.random() * (24 - 12) + 12);

  const [positions, setPositions] = useState<{ top: number; left: number }[]>(
    []
  );

  useEffect(() => {
    const newPositions = [];
    for (let i = 0; i < messages.length; i++) {
      let overlap = false;
      let newTop, newLeft;
      do {
        overlap = false;
        newTop = Math.random() * 80 + 10;
        newLeft = Math.random() * 80 + 10;
        for (let j = 0; j < newPositions.length; j++) {
          if (
            Math.abs(newPositions[j].top - newTop) < 10 &&
            Math.abs(newPositions[j].left - newLeft) < 10
          ) {
            overlap = true;
            break;
          }
        }
      } while (overlap);
      newPositions.push({ top: newTop, left: newLeft });
    }
    setPositions(newPositions);
  }, [messages]);

  return (
    <div
      style={{
        position: "relative",
        height: "500px",
        width: "100%",
        backgroundColor: "background.default",
      }}
    >
      {messages.map((message, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${positions[index]?.top}%`,
            left: `${positions[index]?.left}%`,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar>{message.name[0]}</Avatar>
          <Typography
            style={{
              color: randomColor(),
              fontSize: randomFontSize(),
              marginLeft: "10px",
            }}
          >
            {message.name}: {message.message}
          </Typography>
        </div>
      ))}
    </div>
  );
}
export default MessageGreat;
