import { useTheme } from "styled-components";

import ArrowSvg from "../../components/ui/ArrowSvg";

interface StoryNavigationButtonProps {
  leftOrRight: "left" | "right";
}

function StoryNavigationButton({ leftOrRight }: StoryNavigationButtonProps) {
  const theme = useTheme();
  return (
    <ArrowSvg
      leftOrRight={leftOrRight}
      bgColor={theme.colors.white}
      boxShadow="0px 2px 0px 0px rgba(0, 0, 0, 0.15)"
    />
  );
}

export default StoryNavigationButton;
