// import { useState } from "react";
import styled from "styled-components";
import { App as Editor } from "beibei-lexical-editor";

const StyledEditor = styled.div`
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #eee;
  padding: 0 20px;
`;

function CreatePost() {
  return <StyledEditor>{<Editor />}</StyledEditor>;
}

export default CreatePost;
