import React from "react";

import BasicLayout from "./BasicLayout";

export default {
  title: "Pages/BasicLayout",
  component: BasicLayout,
};

const Template = (args) => <BasicLayout {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
