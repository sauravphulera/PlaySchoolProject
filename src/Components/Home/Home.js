import React from "react";
import "./Home.css";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import SchoolTwoToneIcon from "@material-ui/icons/SchoolTwoTone";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import ListComponent from '../List/List';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "30%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    searchBtn: {
      marginTop: "54.66px",
      background: "rgb(17, 113, 143)",
      color: "rgb(255, 255, 255)",
      fontSize: "24px",
      padding: "7px 31px",
      textTransform: "none",
      borderRadius: "8px",
      "&:hover": {
        background: "rgba(17, 113, 143, 0.8)",
      },
    },
  })
);
const useAutocompleteStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "rgb(17, 113, 143)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgb(17, 113, 143)",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgb(17, 113, 143)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgb(17, 113, 143)",
    },
  },
}));
const themeColor = "rgb(17, 113, 143)";
const textStyles = makeStyles({
  formControlRoot: {
    fontFamily: "Roboto Mono",
    width: "50vw",
    color: "#ffffff",
    borderRadius: "7px",
    position: "relative",
    "& label.Mui-focused": {
      color: "blue",
    },
  },
  inputLabelRoot: {
    color: themeColor,
    fontFamily: "Roboto Mono",
    "&.Mui-focused": {
      color: themeColor,
    },
  },
});

const drawerStyles = makeStyles({
  paper: {
    // top: '64px',
  },
});

const listStyles = makeStyles({
  list: {
    width: 250,
  },
});

const Home = (props) => {
  const classes = useStyles();
  const classAuto = useAutocompleteStyles();
  const textClasses = textStyles();
  const drawerClasses = drawerStyles();
  const listClasses = listStyles();

  /** list of drawer */
  const list = () => (
    <div
      className={clsx(listClasses.list)}
      role="presentation"
      onClick={props.closeDrawer()}
      onKeyDown={props.closeDrawer()}
    >
      <List>
        {["Home"].map((text, index) => (
          <Link to={text == "Home" ? "/" : ""} key={text}>
            <ListItem button>
              <ListItemIcon>
                <HomeTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {["Near By Schools"].map((text, index) => (
          <Link to="/list" key={text}>
            <ListItem button>
              <ListItemIcon>
                <SchoolTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Router>
        {/* Drawer */}
        <Drawer
          // {paperAnchorLeft: { top: '64px'}}
          // anchor={anchor}
          classes={drawerClasses}
          open={props.toggleDrawer}
          onClose={props.closeDrawer()}
        >
          {list()}
        </Drawer>

        <Switch>
          <Route exact path="/list">
            <ListComponent />
          </Route>
          <Route exact path="/">
            <div className="home-container">
              <div className="home-content">
                <div className="heading-font">
                  One stop destination for Your childs
                  <span style={{ color: "#11718F" }}> EDUCATION.</span>
                </div>
                <div className="subHeading" style={{ marginTop: "40px" }}>
                  We provide a single interface to connect to all the
                  playschools around you.
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    marginTop: "40px",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="select-Search">
                    <Autocomplete
                      id="city"
                      classes={classAuto}
                      options={cities}
                      getOptionLabel={(option) => option} // if cities array have key it will be option.key
                      // style={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputLabelProps={{
                            classes: { root: textClasses.inputLabelRoot },
                          }}
                          label="Select city"
                          variant="outlined"
                        />
                      )}
                    />
                  </div>
                  <div className="select-Search">
                    <Autocomplete
                      id="area"
                      options={areas}
                      classes={classAuto}
                      getOptionLabel={(option) => option} // if cities array have key it will be option.key
                      // style={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputLabelProps={{
                            classes: { root: textClasses.inputLabelRoot },
                          }}
                          label="Select Area"
                          variant="outlined"
                        />
                      )}
                    />
                  </div>
                  <div className="select-Search">
                    <Autocomplete
                      id="school"
                      options={schools}
                      classes={classAuto}
                      getOptionLabel={(option) => option} // if cities array have key it will be option.key
                      // style={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select School"
                          variant="outlined"
                          InputLabelProps={{
                            classes: { root: textClasses.inputLabelRoot },
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
                <div>
                  <Button className={classes.searchBtn}>Search</Button>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const cities = [
  "Dehradun",
  "Kolkata",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Surat",
  "Jaipur",
];
const areas = [
  "Rajpur road",
  "Clock tower",
  "Clement town",
  "Prem nagar",
  "Lachhiwala",
  "Dohiwala",
  "ISBT",
  "Silver city",
];
const schools = [
  "Kidzee public school",
  "alana falana school",
  "falana alana school",
];
export default Home;
