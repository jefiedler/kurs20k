import React from "react";
import DateOutput from "./index";

export default {
  title: "Components/Outputs/Dates",
  component: DateOutput,
};

const Template = (args) => <DateOutput {...args} />;

export const Date = Template.bind({});
Date.args = {
  idName: "birth",
  label: "Geburtstag",
};
