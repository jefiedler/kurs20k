import React from "react";

import SearchBar from "../../component/SearchBar/SearchBar";

export default {
  title: "Example/SearchBar",
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Search = Template.bind({});
Search.args = {
  inputType: "text",
};
