import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

interface EmojiData {
  id: string;
  name: string;
  native: string;
  // 其他可能的属性...
}

interface EmojiPickerProps {
  setInputContent: React.Dispatch<React.SetStateAction<string>>;
}

function EmojiPicker({ setInputContent }: EmojiPickerProps) {
  return (
    <Picker
      data={data}
      onEmojiSelect={(emoji: EmojiData) => {
        setInputContent((prevContent: string) => prevContent + emoji.native);
      }}
      emojiSize={20}
      emojiButtonSize={30}
      previewPosition="none"
      navPosition="none"
      perLine={8}
    />
  );
}

export default EmojiPicker;
