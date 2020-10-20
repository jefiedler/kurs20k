import React from "react";
import EditParticipantPage from "../../../pages/EditParticipantPage";
import firmBrand from "../../assets/logo.svg";

export default {
  title: "Pages/Participants/Edit",
  component: EditParticipantPage,
};

const Template = (args) => <EditParticipantPage {...args} />;

export const Edit = Template.bind({});
Edit.args = {
  link: "#",
  title: "Teilnehmer",
  user: "Admin",
  imgPath: firmBrand,
  imgTitle: "Firmbrand",
};
