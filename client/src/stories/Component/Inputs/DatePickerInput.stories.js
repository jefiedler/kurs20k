import React from "react";
import DatePickerInput from "./DatePickerInput";

export default {
  title: "Components/Inputs/Dates",
  component: DatePickerInput,
};

const Template = (args) => <DatePickerInput {...args} />;

export const Date = Template.bind({});
Date.args = {};