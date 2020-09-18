import React from "react";
import LoginButton from "../Buttons/LoginButton";
import Links from "../Links";
import styled from "@emotion/styled";
import InputField from "../InputFields/InputField";

function LoginScreen() {
  return (
    <GridContainer>
      <InputContainer>
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
        <LoginButton buttonLabel="Login" />
        <LinkContainer>
          <Links text="Passwort vergessen?" />
          <Links text="Account erstellen" />
        </LinkContainer>
      </InputContainer>
      <Image src="" alt="Green Snake" />
    </GridContainer>
  );
}

export default LoginScreen;

//Styling

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  background-color: #3f5941;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #3f5941;
`;

const InputContainer = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
`;
const Image = styled.img`
  width: 387px;
  height: 446px;
`;
