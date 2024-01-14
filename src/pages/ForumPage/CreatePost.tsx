import { useState } from "react";
import { EditorState } from "lexical";
import styled from "styled-components";
import { App as Editor } from "beibei-lexical-editor";
import TagList from "../../components/tag/TagList";
import { BaseFlex } from "../../styles/BaseStyles";

const StyledEditor = styled.div`
  width: 100%;
  padding: 1.6rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
`;

const StyledTitleInpit = styled.input`
  width: 100%;
  border: none;
  padding: 0.3rem 0.6rem;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 400;
  color: ${(props) => props.theme.colors.black};
  &:focus {
    outline: none;
  }
`;

const StyledButtonList = styled(BaseFlex)`
  gap: 1rem;
  width: 100%;
  margin-top: 1.6rem;
`;

const StyledButton = styled.button`
  justify-self: center;
  padding: 1.2rem 2.6rem;
  min-width: 6.3rem;
  border: none;

  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
`;

interface CreatePostProps {
  setShowCreatePost: () => void;
}

function CreatePost({ setShowCreatePost }: CreatePostProps) {
  const [publishString, setPublishString] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  function onChange(editorState: EditorState) {
    const editorStateJSON = JSON.stringify(editorState.toJSON());
    setPublishString(editorStateJSON);
    console.log("onChange: ", editorStateJSON);
  }
  function handlePublish() {
    console.log(publishString);
    console.log(tags);
  }

  function handleSelectTag(tag: string) {
    if (tags.includes(tag)) {
      setTags((tags) => tags.filter((t) => t !== tag));
      return;
    }
    setTags((tags) => [...tags, tag]);
  }

  return (
    <StyledEditor>
      <StyledTitleInpit type="text" placeholder="标题" />
      {<Editor onChange={onChange} editable={true} />}
      <TagList tags={tags} handleSelectTag={handleSelectTag} />
      <StyledButtonList>
        <StyledButton onClick={setShowCreatePost}>取消</StyledButton>
        <StyledButton onClick={handlePublish}>发布</StyledButton>
      </StyledButtonList>
    </StyledEditor>
  );
}

export default CreatePost;
