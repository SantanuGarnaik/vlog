import { Alert } from "@mui/material";

function ErrorAlert({ message }) {
  return <Alert severity="error">{message}</Alert>;
}

export default ErrorAlert;
