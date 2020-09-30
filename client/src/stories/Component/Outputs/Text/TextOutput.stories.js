import React from "react";
import TextOutput from "./index";

export default {
  title: "Components/Outputs/Text",
  component: TextOutput,
};

const Template = (args) => <TextOutput {...args} />;

export const Text = Template.bind({});
Text.args = {
  idName: "lastname-input",
  title: "Nachname",
  data: "Mustermann",
};
