import React from "react";
import LoginButton from "../Buttons/LoginButton";
import Links from "../Links";
import styled from "@emotion/styled";
import InputField from "../InputFields/InputField";

function LoginScreen() {
  return (
    <GridContainer>
      <InputField
        labelText="Nutzername"
        inputType="text"
        placeholder="Username"
      />
      <InputField
        labelText="Passwort"
        inputType="password"
        placeholder="Passwort"
      />
      <LoginButton label="Login" />
      <LinkContainer>
        <Links text="Passwort vergessen?" />
        <Links text="Account erstellen" />
      </LinkContainer>
    </GridContainer>
  );
}

export default LoginScreen;

//Styling

const GridContainer = styled.div`
  display: grid;
  grid-row: 1fr 1fr;
  grid-column: auto;
  place-items: center;
  background-color: #3f5941;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #3f5941;
`;
