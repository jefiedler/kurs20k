import React from "react";
import LoginScreen from "../components/Login/LoginScreen";

export default {
  title: "Example/Login/LoginScreen",
  component: LoginScreen,
};

const Template = (args) => <LoginScreen {...args} />;

export const Screen = Template.bind({});
Screen.args = {};
