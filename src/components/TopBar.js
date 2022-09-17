import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

const TopBar = () => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography variant="h6">Coolshop Calculator</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
