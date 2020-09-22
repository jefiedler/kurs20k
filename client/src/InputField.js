import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

InputField.propTypes = {
  label: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const Label = styled.label`
  display: flex;

  background-color: #868c56;
  border-radius: 15px;
  input {
    flex-grow: 1;
    border-radius: 0 15px 15px 0;
    border: none;
  }

  span {
    display: block;
    color: #f2f2f2;
    padding: 15px;
  }
`;

function InputField({ label, inputType, value, onChange }) {
  return (
    <Label>
      <span>{label}</span>
      <input type={inputType} value={value} onChange={onChange} />
    </Label>
  );
}

export default InputField;
