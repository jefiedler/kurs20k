import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Accordion from "@material-ui/core/Accordion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextOutput from "../../Outputs/Text/index";
import DateOutput from "../../Outputs/Date/index";
import EditButton from "../../Buttons/EditButton.js/index";
import DeleteButton from "../../Buttons/DeleteButton/index";

function ShowParticipant({
  lastName,
  firstName,
  birth,
  mobile,
  mail,
  editButtonClick,
  deleteButtonClick,
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
              <TextOutput idName="salutation" title="Anrede" data="Herr" />
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <TextOutput idName="lastName" title="Nachname" data={lastName} />
              <TextOutput idName="firstName" title="Vorname" data={firstName} />
              <DateOutput idName="birth" label="Geburtsdatum" data={birth} />
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <TextOutput idName="street" title="Straße" data="" />
              <TextOutput idName="zipCode" title="PLZ" data="" />
              <TextOutput idName="city" title="Ort" data="" />
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <TextOutput idName="mail" title="E-Mail" data="" />
              <TextOutput idName="landLine" title="Festnetz" data="" />
              <TextOutput idName="mobile" title="Mobil" data="" />
            </Grid>
            <EditButton
              variant="contained"
              color="primary"
              size="smale"
              handleClick={editButtonClick}
            />
            <DeleteButton
              variant="contained"
              color="secondary"
              size="smale"
              handleClick={deleteButtonClick}
            />
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}

export default ShowParticipant;

//Proptypes
ShowParticipant.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  birth: PropTypes.string,
  mobile: PropTypes.string,
  mail: PropTypes.string,
  editButtonClick: PropTypes.func,
  deleteButtonClick: PropTypes.func,
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
