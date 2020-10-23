import React from "react";
import HomeContent from "../../component/Content/HomeScreen/index";

export default {
  title: "Components/Content/Homescreen",
  component: HomeContent,
};

const Template = (args) => <HomeContent {...args} />;

export const Home = Template.bind({});
Home.args = {
  user: "Admin",
};
