import React from "react";
import "./List.css";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import School from "./school/school";
import { schoolList } from "../dummyData";

const useExpansionStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "0 0 0 0",
  },
  heading: {
    fontSize: "18px",
    fontWeight: theme.typography.fontWeightRegular,
    color: "#11718F",
    paddingLeft: "8px",
  },
  hideBorder: {
    "&.MuiPaper-elevation1": {
      boxShadow: "none",
    },
  },
  disablePadding: {
    "&.MuiExpansionPanelSummary-root": {
      padding: "0px !important",
    },
  },
  summary: {
    "&.MuiExpansionPanelDetails-root": {
      padding: "0px !important",
    },
  },
  checkbox: {
    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#11718F",
    },
    // padding: '12px 12px 12px 0px',
  },
}));
const ListComponent = () => {
  const expansionClasses = useExpansionStyles();

  /** all check box states */
  const [checkBoxState, setCheckBoxState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    priceCheckbox: false,
    priceCheckboxB: false,
  });

  /** chool list for filtering schools */
  let [filterSchoolList, setFilterSchoolListState] = React.useState(schoolList);

  const handleChange = (event) => {
    setCheckBoxState({
      ...checkBoxState,
      [event.target.name]: event.target.checked,
    });
    if (event.target.name.includes("price")) {
      const range = event.target.value;
    console.log(range.low);
      filterSchoolList = schoolList.filter((data) => {
        if (event.target.checked) return (data.price > range.low) && (data.price < range.high);
        else return data;
      });
      console.log(filterSchoolList);
      setFilterSchoolListState(filterSchoolList);
    }
  };
  const [isExpanded, setExpanded] = React.useState(true);
  const handleExpansionChange = () => (event) => {
    const currentstate = !isExpanded;
    console.log(currentstate);
    setExpanded(currentstate);
  };

  return (
    <div className="listContainer">
      <div className="List--filters">
        <div className="Filter-text">Filters</div>
        <div
          style={{
            height: "1px",
            marginTop: "1em",
            marginBottom: "1em",
            background: "black",
          }}
        ></div>
        <div className={expansionClasses.root}>
          <ExpansionPanel
            className={expansionClasses.hideBorder}
            expanded={isExpanded}
            onChange={handleExpansionChange()}
          >
            <ExpansionPanelSummary
              className={expansionClasses.disablePadding}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={expansionClasses.heading}>
                Price
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={expansionClasses.summary}>
              <div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          className={expansionClasses.checkbox}
                          checked={checkBoxState.priceCheckbox}
                          onChange={handleChange}
                          name="priceCheckbox"
                          value="{low: 0, high: 750}"
                        />
                      }
                      label="Less than 750$"
                    />
                  </FormGroup>
                  {/* <span className="filter-normal-text"></span> */}
                </div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkBoxState.checkedB}
                          className={expansionClasses.checkbox}
                          onChange={handleChange}
                          name="priceCheckboxB"
                        />
                      }
                      label="750 to 1250"
                    />
                  </FormGroup>
                </div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkBoxState.checkedC}
                          className={expansionClasses.checkbox}
                          onChange={handleChange}
                          name="checkedC"
                        />
                      }
                      label="Less than 750$"
                    />
                  </FormGroup>
                </div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkBoxState.checkedD}
                          className={expansionClasses.checkbox}
                          onChange={handleChange}
                          name="checkedD"
                        />
                      }
                      label="Less than 750$"
                    />
                  </FormGroup>
                </div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className={expansionClasses.root}>
          <ExpansionPanel className={expansionClasses.hideBorder}>
            <ExpansionPanelSummary
              className={expansionClasses.disablePadding}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={expansionClasses.heading}>
                Amenities
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={expansionClasses.summary}>
              <div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkBoxState.checkedA}
                          className={expansionClasses.checkbox}
                          onChange={handleChange}
                          name="checkedA"
                        />
                      }
                      label="Less than 750$"
                    />
                  </FormGroup>
                </div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkBoxState.checkedA}
                          className={expansionClasses.checkbox}
                          onChange={handleChange}
                          name="checkedA"
                        />
                      }
                      label="Less than 750$"
                    />
                  </FormGroup>
                </div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkBoxState.checkedA}
                          className={expansionClasses.checkbox}
                          onChange={handleChange}
                          name="checkedA"
                        />
                      }
                      label="Less than 750$"
                    />
                  </FormGroup>
                </div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkBoxState.checkedA}
                          className={expansionClasses.checkbox}
                          onChange={handleChange}
                          name="checkedA"
                        />
                      }
                      label="Less than 750$"
                    />
                  </FormGroup>
                </div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className={expansionClasses.root}>
          <ExpansionPanel className={expansionClasses.hideBorder}>
            <ExpansionPanelSummary
              className={expansionClasses.disablePadding}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={expansionClasses.heading}>Age</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={expansionClasses.summary}>
              <div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkBoxState.checkedA}
                          className={expansionClasses.checkbox}
                          onChange={handleChange}
                          name="checkedA"
                        />
                      }
                      label="Less than 750$"
                    />
                  </FormGroup>
                </div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkBoxState.checkedA}
                          className={expansionClasses.checkbox}
                          onChange={handleChange}
                          name="checkedA"
                        />
                      }
                      label="Less than 750$"
                    />
                  </FormGroup>
                </div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkBoxState.checkedA}
                          className={expansionClasses.checkbox}
                          onChange={handleChange}
                          name="checkedA"
                        />
                      }
                      label="Less than 750$"
                    />
                  </FormGroup>
                </div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
      <div className="List--data">
        {filterSchoolList.map((school, i) => (
          <School school={school} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ListComponent;
