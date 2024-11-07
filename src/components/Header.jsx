import { AppBar, Toolbar, Typography } from "@mui/material";

function Header({ title }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
