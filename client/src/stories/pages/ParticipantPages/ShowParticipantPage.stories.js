import React from "react";
import ShowParticipantPage from "../../../pages/EditParticipantPage";
import firmBrand from "../../assets/logo.svg";

export default {
  title: "Pages/Participants/Show",
  component: ShowParticipantPage,
};

const Template = (args) => <ShowParticipantPage {...args} />;

export const Show = Template.bind({});
Show.args = {
  link: "#",
  title: "Teilnehmer",
  user: "Admin",
  imgPath: firmBrand,
  imgTitle: "Firmbrand",
};
