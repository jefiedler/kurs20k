import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function LoginButton({ buttonLabel, buttonType }) {
  return (
    <>
      <Button type={buttonType}>{buttonLabel}</Button>
    </>
  );
}

export default LoginButton;

//Proptyps

LoginButton.propTypes = {
  buttonLabel: PropTypes.string,
  buttonType: PropTypes.string,
};

//Styling

const Button = styled.button`
  background-color: #868c56;
  width: 140px;
  height: 60px;
  font-size: 25px;
  color: #f2f2f2;
  border-radius: 4px;
  border: none;
`;
