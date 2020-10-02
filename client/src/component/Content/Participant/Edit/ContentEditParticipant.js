import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import EditParticipant from "../../../Accordion/EditParticipant/index";

function ContentEditParticipant(props) {
  return (
    <Container>
      <h1>Teilnehmererstellung</h1>
      <EditParticipant
        lastName="Mustermann"
        firstName="Max"
        birth="20.12.2020"
        mobile="0225/36589"
        mail="max@mustermann.de"
      ></EditParticipant>
    </Container>
  );
}

export default ContentEditParticipant;

//PropTypes

ContentEditParticipant.propTypes = {};

//Styling

const Container = styled.div`
  margin-left: 20px;
`;
