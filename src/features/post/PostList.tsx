import styled from "styled-components";
import Post from "./Post";
import { PostProps } from "./postSlice";

const StyledContainer = styled.div`
  padding-top: 2rem;
`;

const StyledList = styled.ul`
  padding: 0 1rem;
  list-style: none;
  letter-spacing: 0.7px;
`;

const datas: Array<PostProps> = [
  {
    title: "同样是背叛德云社，为什么郭德纲欢迎曹云金回家，却痛恨何云伟？",
    content:
      "安多里尼先生又点了支香烟。他抽的凶极了。接着他说：“坦白说，我简直不知道跟你说什么好，霍尔顿。”“我知道。很少有人跟我谈得来。我自己心里有数。”",
    author: "银河造梦机",
    createdAt: "12 月 17 日",
    pictures: [],
    tags: ["吐槽划水", "真心建议", "病人日记"],
    videoUrl: "",
    commentCount: 20,
  },
  {
    title: "同样是背叛德云社，为什么郭德纲欢迎曹云金回家，却痛恨何云伟？",
    content:
      "安多里尼先生又点了支香烟。他抽的凶极了。接着他说：“坦白说，我简直不知道跟你说什么好，霍尔顿。”“我知道。很少有人跟我谈得来。我自己心里有数。”",
    author: "银河造梦机",
    createdAt: "12 月 17 日",
    pictures: [],
    tags: ["吐槽划水", "真心建议", "病人日记"],
    videoUrl: "",
    commentCount: 20,
  },
  {
    title: "同样是背叛德云社，为什么郭德纲欢迎曹云金回家，却痛恨何云伟？",
    content:
      "安多里尼先生又点了支香烟。他抽的凶极了。接着他说：“坦白说，我简直不知道跟你说什么好，霍尔顿。”“我知道。很少有人跟我谈得来。我自己心里有数。”",
    author: "银河造梦机",
    createdAt: "12 月 17 日",
    pictures: [],
    tags: ["吐槽划水", "真心建议", "病人日记"],
    videoUrl: "",
    commentCount: 20,
  },
];

function PostList() {
  return (
    <StyledContainer>
      <StyledList>
        {datas.map((data, index) => {
          return <Post post={data} key={index} />;
        })}
      </StyledList>
    </StyledContainer>
  );
}

export default PostList;
