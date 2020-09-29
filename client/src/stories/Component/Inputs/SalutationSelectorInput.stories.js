import React from "react";
import SalutationSelectorInput from "./SalutationSelectorInput";

export default {
  title: "Components/Inputs/Selector",
  component: SalutationSelectorInput,
};

const Template = (args) => <SalutationSelectorInput {...args} />;

export const Salutation = Template.bind({});
Salutation.args = {};
