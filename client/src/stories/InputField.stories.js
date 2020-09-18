import React from "react";
import InputField from "../components/InputFields/InputField";

export default {
  title: "Example/InputFields",
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const BenutzernameInput = Template.bind({});
BenutzernameInput.args = {
  labelText: "Benutzername ",
  inputType: "text",
  placeholder: "Benutzername eingeben",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  labelText: "Passwort",
  inputType: "password",
  placeholder: "Passwort eingeben",
};
