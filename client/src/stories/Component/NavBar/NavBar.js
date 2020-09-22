import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import NavBarItem from "./NavBarItem";
import PartisepantIcon from "../../assets/participantIcon24px.svg";
import BillIcon from "../../assets/receipt24px.svg";
import CourseIcon from "../../assets/course24px.svg";
import Brand from "../Brand/Brand";
import BrandLogo from "../../assets/logo.svg";

function NavBar() {
  return (
    <Container>
      <Brand imgSrc={BrandLogo} imgName="Firm logo" firmName="Kurs20k" />
      <ul>
        <NavBarItem
          label="Teilnehmer"
          href="www.google.de"
          srcPath={PartisepantIcon}
          imgName="Teilnehmer Icon"
        />
        <NavBarItem
          label="Kurse"
          href="www.amazon.de"
          srcPath={CourseIcon}
          imgName="Kurs Icon"
        />
        <NavBarItem
          label="Rrechnungen"
          href="www.apple.de"
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
  width: 278px;
  height: 1078px;

  ul {
    align-content: center;
  }
`;
