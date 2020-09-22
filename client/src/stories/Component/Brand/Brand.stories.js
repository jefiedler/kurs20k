import React from "react";
import Brand from "./Brand";
import brandLogo from "../../assets/logo.svg";

export default {
  title: "Components/Brands/Brand",
  component: Brand,
};

const Template = (args) => <Brand {...args} />;

export const FirmBrand = Template.bind({});
FirmBrand.args = {
  imgSrc: brandLogo,
  imgName: "Firmlogo",
  firmName: "Kurs20k",
};
