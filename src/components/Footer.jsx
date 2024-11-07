import { Box, Divider, Typography } from "@mui/material";

function Footer() {
  return (
    <>
      <Divider />
      <Box
        sx={{
          py: 2,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography variant="body1" color="textSecondary">
          © 2024 My Blog. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
