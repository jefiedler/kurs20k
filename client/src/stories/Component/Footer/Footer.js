import React from "react";
import styled from "@emotion/styled";

function MainFooter() {
  return (
    <Footer>
      <p>Copyright © Kurs20k 2020</p>
    </Footer>
  );
}

export default MainFooter;

//PropTypes
MainFooter.propTypes = {};

//Styling

const Footer = styled.footer`
  display: flex;
  width: 1920px;
  height: 120px;
  background-color: #f2f2f2;
  text-align: center;
  color: #0d0d0d;
  align-items: center;
  justify-content: center;
`;
