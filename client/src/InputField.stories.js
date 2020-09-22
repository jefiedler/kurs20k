import React from "react";

import InputField from "./InputField";

export default {
  title: "Example/InputField",
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const Username = Template.bind({});
Username.args = {
  label: "Nutzername",
  inputType: "text",
};

export const Password = Template.bind({});
Password.args = {
  label: "Passwort",
  inputType: "password",
};
