import React from "react";
import PasswordInput from "../components/InputFields/PasswordInput";

export default {
  title: "Example/InputFields/PasswordInput",
  component: PasswordInput,
};

const Template = (args) => <PasswordInput {...args} />;

export const Password = Template.bind({});
Password.args = {
  label: "Password ",
  placeholderText: "Password eingeben",
};
