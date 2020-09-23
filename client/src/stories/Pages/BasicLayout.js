import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import MainHeader from "../Component/Headers/MainHeader";

function BasicLayout({ link, title, user, imgPath, imgTitle }) {
  return (
    <Container>
      <MainHeader
        href={link}
        titleName={title}
        userName={user}
        imgSrc={imgPath}
        imgName={imgTitle}
      />
    </Container>
  );
}

export default BasicLayout;

//Proptypes
BasicLayout.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  user: PropTypes.string,
  imgPath: PropTypes.string,
  imgTitle: PropTypes.string,
};

//Styling

const Container = styled.div``;
