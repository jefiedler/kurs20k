import React from "react";
import DeleteButton from "../../component/Buttons/DeleteButton/index";

export default {
  title: "Components/Buttons/Delete",
  component: DeleteButton,
};

const Template = (args) => <DeleteButton {...args} />;

export const Delete = Template.bind({});
Delete.args = {
  variant: "contained",
  color: "secondary",
  size: "smale",
};
