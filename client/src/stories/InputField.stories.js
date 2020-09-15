import React from "react";
import InputField from "../components/InputField";

export default {
  title: "Example/InputField",
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const Benutzername = Template.bind({});
Benutzername.args = {
  text: "Benutzername ",
  placeholderText: "Benutzername eingeben",
};
