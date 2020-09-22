import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

SearchBar.propTypes = {
  inputType: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

function SearchBar(inputType, value, onChange) {
  return (
    <Conainer>
      <input type={inputType} value={value} onChange={onChange} />
      <button type="submit">Suchen</button>
    </Conainer>
  );
}

export default SearchBar;

//Styling

const Conainer = styled.div`
  display: flex;
  input {
    border-radius: 15px 0 0 15px;
    border: none;
    flex-grow: 1;
  }
  button {
    background-color: #3f5941;
    color: #f2f2f2;
    border: none;
    border-radius: 0 15px 15px 0;
    padding: 15px;
  }
`;
