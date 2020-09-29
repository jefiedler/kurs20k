import React from "react";
import PropTypes from "prop-types";
import ParticipantAccordion from "../../Component/Accordion/ParticipantAccordion";
import Button from "../../Button";

ParticipantAccordionPage.propTypes = {};

function ParticipantAccordionPage(props) {
  return (
    <div>
      <ParticipantAccordion
        lastName="Mustermann"
        firstName="Max"
        birth="01.01.1976"
        mobile="0221-3514236"
        mail="max@mustermann.de"
      />
      <Button primary="true" label="Speichern" />
    </div>
  );
}

export default ParticipantAccordionPage;
