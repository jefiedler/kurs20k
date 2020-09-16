import React from "react";
import InputField from "../components/InputFields/InputField";

export default {
  title: "Example/InputFields/InputField",
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const Benutzername = Template.bind({});
Benutzername.args = {
  text: "Benutzername ",
  placeholderText: "Benutzername eingeben",
};
