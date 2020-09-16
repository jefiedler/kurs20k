import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function Links({ link, text }) {
  return (
    <>
      <Link href={link}>{text}</Link>
    </>
  );
}

export default Links;

//Propytyps

Links.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

//Styling

const Link = styled.a`
  color: #d9cc8b;
  font-size: 15px;
  text-decoration: underline;
  font-style: italic;

  :visited {
    color: #d9cc8b;
  }
`;
