import React from "react";
import styled from "@emotion/styled";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import AccordionSummary from '@material-ui/core/AccordionSummary';

function ParticipantAccordion({ lastName, firstName, birth, mobile, mail }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <AccordionContainer>
      <AccordionStyle
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            {lastName}, {firstName}, {birth}, {mobile}, {mail}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nachname: {lastName}
            Vorname: {firstName}
            Geburtstag: {birth}
          </Typography>
        </AccordionDetails>
      </AccordionStyle>
    </AccordionContainer>
  );
}

export default ParticipantAccordion;

//Proptypes
ParticipantAccordion.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  birth: PropTypes.string,
  mobile: PropTypes.string,
  mail: PropTypes.string,
};

//Styling

const AccordionContainer = styled.div`
  width: 1400px;
  height: 600px;
`;

const AccordionStyle = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
