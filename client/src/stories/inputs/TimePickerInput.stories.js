import React from "react";
import TimePickerInput from "../../component/Inputs/TimePickerInput";

export default {
  title: "Components/Inputs/Timeinput",
  component: TimePickerInput,
};

const Template = (args) => <TimePickerInput {...args} />;

export const Time = Template.bind({});
Time.args = {};
