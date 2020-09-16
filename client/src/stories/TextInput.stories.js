import React from "react";
import TextInput from "../components/InputFields/TextInput";

export default {
  title: "Example/InputFields/TextInput",
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Benutzername = Template.bind({});
Benutzername.args = {
  text: "Benutzername ",
  placeholderText: "Benutzername eingeben",
};
