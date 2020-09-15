import React from "react";
import PropTypes from "prop-types";

function InputField({ text, placeholderText }) {
  return (
    <>
      <form>
        <label>{text}</label>
        <input type="text" placeholder={placeholderText}></input>
      </form>
    </>
  );
}

export default InputField;

InputField.propTypes = {
  text: PropTypes.string,
  placeholderText: PropTypes.string,
};
