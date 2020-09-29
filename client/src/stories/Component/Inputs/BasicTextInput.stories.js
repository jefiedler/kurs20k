import React from "react";
import BasicTextInput from "./BasicTextInput";

export default {
  title: "Components/Inputs/InputFields",
  component: BasicTextInput,
};

const Template = (args) => <BasicTextInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  idName: "lastname-input",
  title: "Nachname",
  inputType: "text",
};

export const Password = Template.bind({});
Password.args = {
  idName: "firstname-input",
  title: "Passwort",
  inputType: "password",
};
