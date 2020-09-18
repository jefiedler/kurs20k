import React from "react";
import LoginButton from "../components/Buttons/LoginButton";

export default {
  title: "Example/Buttons/LoginButton",
  component: LoginButton,
};

const Template = (args) => <LoginButton {...args} />;

export const Login = Template.bind({});
Login.args = {
  buttonLabel: "Login",
  buttonType: "button",
};
