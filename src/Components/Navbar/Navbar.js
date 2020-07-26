import React from "react";
import "./Navbar.css";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    background: 'white',
    color: '#11718F',
    "&.MuiPaper-elevation4": {
      boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
    }
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  menuIcon: {
    width: '1.5em',
    height: '1.5em',
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const toggleDrawer = () => {
    console.log('child')
    props.onClickMenu(); 
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton
          onClick={toggleDrawer}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Kidora
        </Typography>
        <Button color="inherit">About</Button>
        <Button color="inherit">FAQ's</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
