import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import NavBarItem from "./NavBarItem";
import HomeIcon from "../../stories/assets/homeIcon.svg";
import PartisepantIcon from "../../stories/assets/participantIcon24px.svg";
import BillIcon from "../../stories/assets/receipt24px.svg";
import CourseIcon from "../../stories/assets/course24px.svg";
import Brand from "../Brand/FirmBrand/index";
import BrandLogo from "../../stories/assets/logo.svg";

function NavBar() {
  return (
    <Container>
      <Brand imgSrc={BrandLogo} imgName="Firm logo" firmName="Kurs20k" />
      <ul>
        <NavBarItem
          label="Home"
          href="/home"
          srcPath={HomeIcon}
          imgName="Home Icon"
        />
        <NavBarItem
          label="Teilnehmer"
          href="/teilnehmer"
          srcPath={PartisepantIcon}
          imgName="Teilnehmer Icon"
        />
        <NavBarItem
          label="Kurse"
          href="/kurse"
          srcPath={CourseIcon}
          imgName="Kurs Icon"
        />
        <NavBarItem
          label="Rechnungen"
          href="/rechnungen"
          srcPath={BillIcon}
          imgName="Rechnungs Icon"
        />
      </ul>
    </Container>
  );
}

export default NavBar;

// Proptypes
NavBar.propTypes = {
  navItemLabel: PropTypes.string,
  href: PropTypes.string,
  imgSrc: PropTypes.string,
  imgName: PropTypes.string,
};

// Styling

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3f5941;
  width: 240px;
  height: 1080px;
  border-radius: 0 5px 5px 0;
  ul {
    align-content: center;
    margin-left: 20px;
    margin-top: 75px;
  }
`;
