import React from "react";
import "./Home.css";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Drawer from '@material-ui/core/Drawer';

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
  }
});

const drawerStyles = makeStyles({
  paper: {
    top: '64px',
  },
  root: {
    top: '64px',
  }
})

const Home = (props) => {
  const classes = useStyles();
  const classAuto = useAutocompleteStyles();
  const textClasses = textStyles();
  const drawerClasses = drawerStyles();

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="heading-font">
          One stop destination for Your childs
          <span style={{ color: "#11718F" }}> EDUCATION.</span>
        </div>
        <div className="subHeading" style={{ marginTop: "40px" }}>
          We provide a single interface to connect to all the playschools around
          you.
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
          <Button className={classes.searchBtn}>
            Search
          </Button>
        </div>

        {/* Drawer */}
        <Drawer
        // {paperAnchorLeft: { top: '64px'}}
          // anchor={anchor}
          classes = {drawerClasses}
          open={props.toggleDrawer}
          onClose={props.closeDrawer()}
        >
          Thullu
        </Drawer>
      </div>
    </div>
  );
}

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
