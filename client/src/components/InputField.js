import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function InputField({ text, placeholderText }) {
  return (
    <>
      <form>
        <Label>{text}</Label>
        <Input type="text" placeholder={placeholderText}></Input>
      </form>
    </>
  );
}

export default InputField;

// Proptyps

InputField.propTypes = {
  text: PropTypes.string,
  placeholderText: PropTypes.string,
};

// Styling

const Label = styled.label`
  background-color: #868c56;
  color: #f2f2f2;
  padding: 10px;
  border: none;
  border-radius: 4px 0 0 4px;
`;
const Input = styled.input`
  padding: 10px;
  border: none;
  border-color: #ffffff;
  border-radius: 0 4px 4px 0;
`;
