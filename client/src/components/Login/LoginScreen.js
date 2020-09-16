import React from "react";
import LoginButton from "../Buttons/LoginButton";
import TextInput from "../InputFields/TextInput";
import PasswordInput from "../InputFields/PasswordInput";
import Links from "../Links";
import styled from "@emotion/styled";

function LoginScreen() {
  return (
    <GridContainer>
      <TextInput text="Nutzername" placeholderText="Benutzername angeben" />
      <PasswordInput label="Passwort" placeholderText="Passwort" />
      <LoginButton label="Login" />
      <LinkContainer>
        <Links text="Passwort vergessen?" />
        <Links text="Accounterstellen" />
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

  background-color: #3f5941;
`;
