import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useStyles } from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar>
        <Typography variant="h5" className={classes.navbrand}>
          StoryPad
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Add Story</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
