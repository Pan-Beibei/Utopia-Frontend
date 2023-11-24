import { ForwardedRef, forwardRef } from "react";
import { Box } from "@mui/system";

const IconWithTextLabelComponent = forwardRef<
  HTMLDivElement,
  {
    className: string;
    dataValue: string;
    children: React.ReactNode;
    icon: React.ReactNode;
  }
>(({ className, dataValue, children, icon, ...props }, ref) => (
  <Box
    ref={ref}
    className={className}
    data-value={dataValue}
    {...props}
    sx={{
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      gap: "1rem",
      color: "text.secondary",
    }}
  >
    {children}
    {icon}
  </Box>
));

const IconWithTextLabel = forwardRef(
  (
    {
      className,
      dataValue,
      children,
      icon,
      ...props
    }: {
      className: string;
      dataValue: string;
      children: React.ReactNode;
      icon: React.ReactNode;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <IconWithTextLabelComponent
        className={className}
        dataValue={dataValue}
        icon={icon}
        ref={ref}
        {...props}
      >
        {children}
      </IconWithTextLabelComponent>
    );
  }
);

export default IconWithTextLabel;
