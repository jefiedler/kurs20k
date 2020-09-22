import React from "react";
import ProfilBrand from "./ProfilBrand";
import ProfileImg from "../../assets/logo.svg";

export default {
  title: "Components/Brands/ProfilBrand",
  component: ProfilBrand,
};

const Template = (args) => <ProfilBrand {...args} />;

export const User = Template.bind({});
User.args = {
  href: "www.amazon.de",
  userName: "Admin",
  imgSrc: ProfileImg,
  imgName: "Profile Pic",
};
