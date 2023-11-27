import { memo, forwardRef, useCallback } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { SnackbarCloseReason } from "@mui/material/Snackbar";

interface GlobalSnackbarProps {
  open: boolean;
  message: string;
  close: () => void;
}

const Alert = memo(
  forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
    <MuiAlert elevation={6} variant="filled" ref={ref} {...props} />
  ))
);

function GlobalSnackbar({ open, message, close }: GlobalSnackbarProps) {
  const handleClose = useCallback(
    (_: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === "clickaway") {
        return;
      }

      close();
    },
    [close]
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
}

export default GlobalSnackbar;
