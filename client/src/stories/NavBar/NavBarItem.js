import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

NavBarItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  srcPath: PropTypes.string,
  imgName: PropTypes.string,
};

function NavBarItem({ label, href, srcPath, imgName }) {
  return (
    <ListItem>
      <img src={srcPath} alt={imgName} />
      <a href={href}>{label}</a>
    </ListItem>
  );
}

export default NavBarItem;

//Styling

const ListItem = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  a {
    color: #d9cc8b;
  }
`;
