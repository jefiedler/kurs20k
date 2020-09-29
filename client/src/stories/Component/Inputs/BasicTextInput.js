import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

function BasicTextInput({ idName, title, inputType, onChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        required
        id={idName}
        label={title}
        type={inputType}
        onChange={onChange}
      />
    </div>
  );
}

export default BasicTextInput;

//PropTypes

BasicTextInput.propTypes = {
  idName: PropTypes.string,
  title: PropTypes.string,
  inputType: PropTypes.string,
  onChange: PropTypes.func,
};

//Styling

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
