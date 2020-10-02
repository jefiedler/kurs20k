import React from "react";
import ParticipantPage from "../../pages/participants/ParticipantPage";
import firmBrand from "../assets/logo.svg";

export default {
  title: "Pages/ParticipantPage",
  component: ParticipantPage,
};

const Template = (args) => <ParticipantPage {...args} />;

export const ShowParticipant = Template.bind({});
ShowParticipant.args = {
  link: "#",
  title: "Teilnehmer",
  user: "Admin",
  imgPath: firmBrand,
  imgTitle: "Firmbrand",
};

export const EditParticipant = Template.bind({});
EditParticipant.args = {
  link: "#",
  title: "Teilnehmer",
  user: "Admin",
  imgPath: firmBrand,
  imgTitle: "Firmbrand",
};
