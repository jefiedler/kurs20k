import React from "react";
import EditButton from "../../component/Buttons/EditButton/index";

export default {
  title: "Components/Buttons/Edit",
  component: EditButton,
};

const Template = (args) => <EditButton {...args} />;

export const Edit = Template.bind({});
Edit.args = {
  variant: "contained",
  color: "default",
  size: "smale",
};
