import React from "react";
import NavBarItem from "./NavBarItem";
import PartisepantIcon from "../assets/participantIcon24px.svg";
import BillIcon from "../assets/receipt24px.svg";
import CourseIcon from "../assets/course24px.svg";

export default {
  title: "Example/NavBarItem",
  component: NavBarItem,
};

const Template = (args) => <NavBarItem {...args} />;

export const Partisepants = Template.bind({});
Partisepants.args = {
  label: "Teilnehmer",
  href: "#",
  srcPath: PartisepantIcon,
  imgName: "participant icon",
};

export const Finances = Template.bind({});
Finances.args = {
  label: "Teilnehmer",
  href: "#",
  srcPath: BillIcon,
  imgName: "bill icon",
};

export const Courses = Template.bind({});
Courses.args = {
  label: "Teilnehmer",
  href: "#",
  srcPath: CourseIcon,
  imgName: "course icon",
};
