import React from "react";
import Footer from "../components/Footer/Footer";

export default {
  title: "Example/Footer/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const FooterComponent = Template.bind({});
FooterComponent.args = {
  footerText: "Copyrights by Kurs20k",
};
