import React from "react";
import FrimBrand from "../../component/Brand/FirmBrand/index";
import brandLogo from "../assets/logo.svg";

export default {
  title: "Components/Brands/FrimBrand",
  component: FrimBrand,
};

const Template = (args) => <FrimBrand {...args} />;

export const Firm = Template.bind({});
Firm.args = {
  imgSrc: brandLogo,
  imgName: "Firmlogo",
  firmName: "Kurs20k",
};
