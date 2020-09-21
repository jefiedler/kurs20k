import React from "react";

import SerachBar from "./SearchBar";

export default {
  title: "Example/SerachBar",
  component: SerachBar,
};

const Template = (args) => <SerachBar {...args} />;

export const SearchBar = Template.bind({});
SearchBar.args = {
  inputType: "text",
};
