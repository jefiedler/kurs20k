import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function TextInput({ text, placeholderText }) {
  return (
    <>
      <Form>
        <Label>{text}</Label>
        <Input type="text" placeholder={placeholderText}></Input>
      </Form>
    </>
  );
}

export default TextInput;

// Proptyps

TextInput.propTypes = {
  text: PropTypes.string,
  placeholderText: PropTypes.string,
};

// Styling

const Form = styled.form`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  width: 100vh;
`;

const Label = styled.label`
  background-color: #868c56;
  color: #f2f2f2;
  font-size: 20px;
  text-align: center;
  border: none;
  border-radius: 4px 0 0 4px;
`;

const Input = styled.input`
  font-size: 20px;
  border: none;
  border-color: #ffffff;
  border-radius: 0 4px 4px 0;
`;
