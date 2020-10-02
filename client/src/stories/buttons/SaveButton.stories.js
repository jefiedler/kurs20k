import React from "react";
import SaveButton from "../../component/Buttons/SaveButton/index";

export default {
  title: "Components/Buttons/Save",
  component: SaveButton,
};

const Template = (args) => <SaveButton {...args} />;

export const Save = Template.bind({});
Save.args = {
  variant: "contained",
  color: "primary",
  size: "smale",
};
