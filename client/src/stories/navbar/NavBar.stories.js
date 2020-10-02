import React from "react";
import NavBar from "../../component/NavBars/NavBar";

export default {
  title: "Components/Navigation/NavBar",
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const SideNavbar = Template.bind({});
SideNavbar.args = {
  navItemLabel: "Particepant",
};
