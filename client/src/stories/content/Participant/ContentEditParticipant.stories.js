import React from "react";
import ContentEditParticipant from "../../../component/Content/Participant/Edit/index";

export default {
  title: "Components/Content/Participant/Edit",
  component: ContentEditParticipant,
};

const Template = (args) => <ContentEditParticipant {...args} />;

export const Edit = Template.bind({});
Edit.args = {
  lastName: "Mustermann",
  firstName: "Max",
  birth: "20.05.1966",
  mobile: "0175/32478596",
  mail: "max@mustermann.de",
};
