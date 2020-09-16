import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function PasswordInput({ label, placeholderText }) {
  return (
    <>
      <Form>
        <Label>{label}</Label>
        <Input type="password" placeholder={placeholderText}></Input>
      </Form>
    </>
  );
}

export default PasswordInput;

// Proptyps

PasswordInput.propTypes = {
  label: PropTypes.string,
  placeholderText: PropTypes.string,
};

// Styling

const Form = styled.form`
  display: grid;
  grid-template-rows: 0.5fr;
  grid-template-columns: 1fr 1fr;
  width: 100vh;
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
