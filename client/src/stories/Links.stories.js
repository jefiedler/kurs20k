import React from "react";
import Links from "../components/Links";

export default {
  title: "Example/Links",
  component: Links,
};

const Template = (args) => <Links {...args} />;

export const NoPassword = Template.bind({});
NoPassword.args = {
  text: "Passwort vergessen?",
};

export const NoAccount = Template.bind({});
NoAccount.args = {
  text: "Accounterstellen?",
};
