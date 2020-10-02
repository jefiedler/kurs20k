import React from "react";
import PropTypes from "prop-types";
import BasicLayout from "../BasicLayout";
import ShowParticipant from "../../component/Accordion/ShowParticipant/index";

function ParticipantPage({ imgPath }) {
  return (
    <>
      <BasicLayout
        link="#"
        title="Teilnehmer"
        user="Admin"
        imgPath={imgPath}
        imgTitle="Frimbrand"
      >
        <ShowParticipant
          lastName="Mustermann"
          firstName="Max"
          birth={new Date("1988-12-01")}
          mobile="0125/45698533"
          mail="max@mustermann.de"
          editButtonClick=""
          deleteButtonClick=""
        />
      </BasicLayout>
    </>
  );
}

export default ParticipantPage;

//PropTypes
ParticipantPage.propTypes = {
  imgPath: PropTypes.string,
};

//Styling
