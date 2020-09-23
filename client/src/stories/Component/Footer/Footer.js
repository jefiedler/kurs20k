import React from "react";
import styled from "@emotion/styled";

function MainFooter() {
  return (
    <Footer>
      <span>Copyright © Kurs20k 2020</span>
    </Footer>
  );
}

export default MainFooter;

//PropTypes
MainFooter.propTypes = {};

//Styling

const Footer = styled.footer`
  width: 1920px;
  height: 116px;
  background-color: #f2f2f2;
  text-align: center;
  color: #0d0d0d;
`;
