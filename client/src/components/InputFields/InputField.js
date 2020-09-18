import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function InputField({ labelText, inputType, placeholder }) {
  return (
    <>
      <Form>
        <Label>{labelText}</Label>
        <Input type={inputType} placeholder={placeholder}></Input>
      </Form>
    </>
  );
}

export default InputField;

// Proptyps

InputField.propTypes = {
  labelText: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
};

// Styling

const Form = styled.form`
  display: grid;
  grid-template-rows: 0.5fr;
  grid-template-columns: 1fr 1fr;
  width: 100vh;
  margin: 5px;
`;

const Label = styled.label`
  background-color: #868c56;
  text-align: center;
  font-size: 20px;
  color: #f2f2f2;
  border: none;
  border-radius: 4px 0 0 4px;
`;
const Input = styled.input`
  font-size: 20px;
  border: none;
  border-color: #ffffff;
  border-radius: 0 4px 4px 0;
`;
