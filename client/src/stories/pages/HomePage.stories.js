import React from "react";
import HomePage from "../../pages/HomePage";
import firmBrand from "../assets/logo.svg";

export default {
  title: "Pages/Home",
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Home = Template.bind({});
Home.args = {
  link: "#",
  title: "Home",
  user: "Admin",
  imgPath: firmBrand,
  imgTitle: "Firmbrand",
};
