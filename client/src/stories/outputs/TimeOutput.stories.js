import React from "react";
import TimeOutput from "../../component/Outputs/Time/index";

export default {
  title: "Components/Outputs/Time",
  component: TimeOutput,
};

const Template = (args) => <TimeOutput {...args} />;

export const Time = Template.bind({});
Time.args = {
  idName: "StartTime",
  label: "Beginn",
};
