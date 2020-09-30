import React from "react";
import CreateButton from "./index";

export default {
  title: "Components/Buttons/Create",
  component: CreateButton,
};

const Template = (args) => <CreateButton {...args} />;

export const Create = Template.bind({});
Create.args = {
  variant: "contained",
  color: "defaulte",
  size: "smale",
};
