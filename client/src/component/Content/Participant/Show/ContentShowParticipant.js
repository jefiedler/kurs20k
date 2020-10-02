import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import ShowParticipant from "../../../Accordion/ShowParticipant/index";

function ContentShowParticipant(props) {
  return (
    <Container>
      <h1>Teilnehmerübersicht</h1>
      <ShowParticipant
        lastName="Mustermann"
        firstName="Max"
        birth="20.12.2020"
        mobile="0225/36589"
        mail="max@mustermann.de"
      ></ShowParticipant>
    </Container>
  );
}

export default ContentShowParticipant;

//PropTypes

ContentShowParticipant.propTypes = {};

//Styling

const Container = styled.div`
  margin-left: 20px;
`;
