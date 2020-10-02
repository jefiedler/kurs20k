import React from "react";
import ContentShowParticipant from "../../../component/Content/Participant/Show/index";

export default {
  title: "Components/Content/Participant/Show",
  component: ContentShowParticipant,
};

const Template = (args) => <ContentShowParticipant {...args} />;

export const Show = Template.bind({});
Show.args = {
  lastName: "Mustermann",
  firstName: "Max",
  birth: "20.05.1966",
  mobile: "0175/32478596",
  mail: "max@mustermann.de",
};
