import React from "react";
import PropTypes from "prop-types";
import BasicTextInput from "./BasicTextInput";
import SalutationSelectorInput from "./SalutationSelectorInput";
import DatePickerInput from "./DatePickerInput";
import styled from "@emotion/styled";

function ParticipantInput(props) {
  return (
    <FormContainer>
      <PersonalDataContainer>
        <SalutationSelectorInput />
        <BasicTextInput
          idName="lastName"
          title="Nachname"
          inputType="text"
          onChange=""
        />
        <BasicTextInput
          idName="firstName"
          title="Vorname"
          inputType="text"
          onChange=""
        />
        <DatePickerInput />
      </PersonalDataContainer>
      <AdressDataContainer>
        <BasicTextInput
          idName="street"
          title="Straße"
          inputType="text"
          onChange=""
        />
        <BasicTextInput idName="zip" title="PLZ" inputType="text" onChange="" />
        <BasicTextInput
          idName="city"
          title="Ort"
          inputType="text"
          onChange=""
        />
      </AdressDataContainer>
      <MailDataContainer>
        <BasicTextInput
          idName="mail"
          title="E-Mail"
          inputType="text"
          onChange=""
        />
      </MailDataContainer>
      <BasicTextInput
        idName="mobil"
        title="Mobil"
        inputType="text"
        onChange=""
      />
    </FormContainer>
  );
}

export default ParticipantInput;

//Proptyps

ParticipantInput.propTypes = {};

//Styling
const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 230px 230px;
  grid-template-rows: 235px 100px;
`;

const PersonalDataContainer = styled.div``;

const AdressDataContainer = styled.div``;

const MailDataContainer = styled.div``;
