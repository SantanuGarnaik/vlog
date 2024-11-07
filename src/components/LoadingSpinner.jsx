import { CircularProgress, Box } from "@mui/material";

function LoadingSpinner() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
      <CircularProgress />
    </Box>
  );
}

export default LoadingSpinner;
