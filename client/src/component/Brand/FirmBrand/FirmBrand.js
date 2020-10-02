import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function FrimBrand({ imgSrc, imgName, firmName }) {
  return (
    <Container>
      <img src={imgSrc} alt={imgName} />
      <p>{firmName}</p>
    </Container>
  );
}

export default FrimBrand;

//Proptypes

FrimBrand.propTypes = {
  imgSrc: PropTypes.string,
  imgName: PropTypes.string,
  firmName: PropTypes.string,
};

// Styling

const Container = styled.div`
  display: grid;
  grid-template-columns: 65px 1fr;
  margin-top: 24px;
  p {
    color: #f2f2f2;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 28px;
  }
  img {
    align-items: baseline;
    margin: 10px 0 10px 10px;
  }
`;
