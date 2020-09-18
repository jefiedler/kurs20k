import React from "react";
import LoginPage from "../Pages/LoginPage";

export default {
  title: "Example/Login/LoginPage",
  component: LoginPage,
};

const Template = (args) => <LoginPage {...args} />;

export const Screen = Template.bind({});
Screen.args = {};
