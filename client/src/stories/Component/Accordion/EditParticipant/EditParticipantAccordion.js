import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Accordion from "@material-ui/core/Accordion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BasicTextInput from "../../Inputs/BasicTextInput";
import SalutationSelectorinput from "../../Inputs/SalutationSelectorInput";
import DatePickerInput from "../../Inputs/DatePickerInput";
import SaveButton from "../../Buttons/SaveButton/index";

function EditParticipantAccordion({
  lastName,
  firstName,
  birth,
  mobile,
  mail,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container spacing={3}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            {lastName}, {firstName}, {birth}, {mobile}, {mail}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <SalutationSelectorinput />
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <BasicTextInput idName="lastName" title="Nachname" onChange="" />
              <BasicTextInput idName="firstName" title="Vorname" onChange="" />
              <DatePickerInput idName="birth" label="Geburtsdatum" />
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <BasicTextInput idName="street" title="Straße" onChange="" />
              <BasicTextInput idName="zipCode" title="PLZ" onChange="" />
              <BasicTextInput idName="city" title="Ort" onChange="" />
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <BasicTextInput idName="mail" title="E-Mail" onChange="" />
              <BasicTextInput idName="landLine" title="Festnetz" onChange="" />
              <BasicTextInput idName="mobile" title="Mobil" onChange="" />
            </Grid>
            <SaveButton variant="contained" color="primary" size="smale" />
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}

export default EditParticipantAccordion;

//Proptypes
EditParticipantAccordion.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  birth: PropTypes.string,
  mobile: PropTypes.string,
  mail: PropTypes.string,
};

//Styling

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  details: {
    width: "1350px",
    height: "150px",
    background: "#F2F2F2",
    borderRadius: "5px",
  },
}));
