import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ProfilBrand from "../Brand/ProfilBrand";

function MainHeader({ href, titleName, userName, imgSrc, imgName }) {
  return (
    <Container>
      <h1>{titleName}</h1>
      <UserBrand>
        <ProfilBrand
          href={href}
          userName={userName}
          imgSrc={imgSrc}
          imgName={imgName}
        />
      </UserBrand>
    </Container>
  );
}

export default MainHeader;

//PropTypes
MainHeader.propTypes = {
  href: PropTypes.string,
  titleName: PropTypes.string,
  userName: PropTypes.string,
  imgSrc: PropTypes.string,
  imgName: PropTypes.string,
};

//Styling

const Container = styled.div`
  display: grid;
  grid-template-columns: 278px 1fr auto;
  width: 1920px;
  height: 120px;
  background-color: #868c56;
  border-radius: 0 0 5px 5px;
  h1 {
    color: #f2f2f2;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    align-self: center;
    margin-left: 10px;
    font-size: 30px;
  }
`;
const UserBrand = styled.div`
  grid-column: 3 / 4;
`;
