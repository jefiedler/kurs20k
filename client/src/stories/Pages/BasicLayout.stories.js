import React from "react";
import BasicLayout from "./BasicLayout";
import firmBrand from "../assets/logo.svg";

export default {
  title: "Pages/BasicLayout",
  component: BasicLayout,
};

const Template = (args) => <BasicLayout {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  link: "#",
  title: "Teilnehmer",
  user: "Admin",
  imgPath: firmBrand,
  imgTitle: "Firmbrand",
};
