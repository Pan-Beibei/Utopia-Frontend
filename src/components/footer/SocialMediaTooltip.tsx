import React, { forwardRef } from "react";
import Fade from "@mui/material/Fade";
import { styled } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import IconWithTextLabel from "./IconWithTextLabel";

const SocialMediaTooltipComponent = styled(
  forwardRef(({ className, ...props }: TooltipProps, ref) => (
    <Tooltip {...props} arrow classes={{ popper: className }} ref={ref} />
  ))
)(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main,
    fontSize: "2rem",
    borderRadius: "50%",
    padding: "1rem",
  },
}));

const SocialMediaTooltip = forwardRef<
  HTMLDivElement,
  {
    title: string;
    className: string;
    dataValue: string;
    children: React.ReactNode;
    icon: React.ReactNode;
  }
>(({ title, className, dataValue, children, icon }, ref) => {
  return (
    <SocialMediaTooltipComponent
      title={title}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      placement="top"
      ref={ref}
    >
      <IconWithTextLabel
        className={className}
        dataValue={dataValue}
        icon={icon}
      >
        {children}
      </IconWithTextLabel>
    </SocialMediaTooltipComponent>
  );
});

export default SocialMediaTooltip;
