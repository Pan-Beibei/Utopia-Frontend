// import { Card, CardContent, Typography } from "@mui/material";
import MessageGreat from "../../features/message/MessageGreat";

const possibleMessages = [
  { name: "John", message: "Great coffee!" },
  { name: "Emma", message: "Lovely atmosphere." },
  { name: "Robert", message: "Best café in town." },
  { name: "Olivia", message: "The pastries are so good." },
  { name: "Michael", message: "Friendly staff." },
  { name: "Ava", message: "I love the interior design." },
  { name: "William", message: "My favorite place to relax." },
  { name: "Sophia", message: "Highly recommended!" },
];

//该模块待定！！！！
//用于展示顾客的留言
function Guests() {
  return (
    <div>
      <MessageGreat messages={possibleMessages} />
    </div>
  );
}

export default Guests;
