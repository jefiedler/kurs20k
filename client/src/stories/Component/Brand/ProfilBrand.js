import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ProfilBrand({ href, userName, imgSrc, imgName }) {
  return (
    <Container>
      <TextContainer>
        <p>{userName} </p>
        <a href={href}>Logout</a>
      </TextContainer>
      <img src={imgSrc} alt={imgName}></img>
    </Container>
  );
}

export default ProfilBrand;

//PropTypes
ProfilBrand.propTypes = {
  href: PropTypes.string,
  userName: PropTypes.string,
  imgSrc: PropTypes.string,
  imgName: PropTypes.string,
};

//Styling

const Container = styled.div`
  display: grid;
  height: 116px;
  background-color: #868c56;
  border-radius: 0 0px 5px 5px;
  h1 {
    color: #f2f2f2;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    align-self: center;
    margin-left: 10px;
    font-size: 30px;
  }
  img {
    grid-column: 4 / 5;
    grid-row: 1 / 3;
    align-self: center;
    padding-right: 10px;
    padding-left: 20px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 3 / 4;
  grid-row: 1/ 3;
  align-self: center;
  p {
    color: #f2f2f2;
    margin: 0;
    font-size: 20px;
    text-align: right;
  }
  a {
    color: #f2f2f2;
    font-size: 15px;
    font-style: italic;
    text-align: right;
  }
`;
