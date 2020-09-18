import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function Footer({ footerText }) {
  return (
    <footer>
      <P>{footerText}</P>
    </footer>
  );
}

export default Footer;

//PropTypes

Footer.propTypes = {
  footerText: PropTypes.string,
};

//Styling

const P = styled.p`
  text-align: center;
`;
