import React from "react";
import MainHeader from "../../component/Headers/index";
import ProfileImg from "../assets/logo.svg";

export default {
  title: "Components/Headers/MainHeader",
  component: MainHeader,
};

const Template = (args) => <MainHeader {...args} />;

export const Header = Template.bind({});
Header.args = {
  href: "www.amazon.de",
  titleName: "Teilnehmer",
  userName: "Admin",
  imgSrc: ProfileImg,
  imgName: "Profile Pic",
};
