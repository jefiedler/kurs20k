import React from "react";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Accordion from "@material-ui/core/Accordion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ParticipantInput from "../Inputs/ParticipantInput";

function ParticipantAccordion({ lastName, firstName, birth, mobile, mail }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <AccordionContainer>
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
          <Typography className={classes.details}>
            <ParticipantInput />
          </Typography>
        </AccordionDetails>
      </Accordion>
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

// //Styling

const AccordionContainer = styled.div`
  width: 1400px;
  height: 600px;
`;

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  details: {
    width: "1350px",
    background: "#F2F2F2",
    borderRadius: "5px",
  },
}));
