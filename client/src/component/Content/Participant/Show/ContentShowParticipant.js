import React from "react";
import styled from "@emotion/styled";
import ShowParticipant from "../../../Accordion/ShowParticipant/index";

function ContentShowParticipant() {
  return (
    <Container>
      <h1>Teilnehmerübersicht</h1>
      <ShowParticipant
        lastName="Mustermann"
        firstName="Max"
        birth="28.05.1988"
        mobile="0225/36589"
        mail="max@mustermann.de"
        street="Musterstr. 408"
        zip="05689"
        city="Musterstadt"
        landLine="0223/758936215"
      />
      <ShowParticipant
        lastName="Fridrich"
        firstName="Gisela"
        birth="02.09.1956"
        mobile="0156/896553"
        mail="gisela@friedrich.de"
        street="Müsterstr. 7"
        zip="4568"
        city="Berlin"
        landLine="0156/4785689"
      />
    </Container>
  );
}

export default ContentShowParticipant;

//Styling

const Container = styled.div`
  margin-left: 20px;
`;
