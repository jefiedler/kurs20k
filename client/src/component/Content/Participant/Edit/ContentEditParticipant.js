import React from "react";
import styled from "@emotion/styled";
import EditParticipant from "../../../Accordion/EditParticipant/index";

function ContentEditParticipant() {
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

//Styling

const Container = styled.div`
  margin-left: 20px;
`;
