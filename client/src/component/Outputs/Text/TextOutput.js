import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

function TextOutput({ idName, title, data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        id={idName}
        label={title}
        defaultValue={data}
        InputProps={{
          readOnly: true,
        }}
      />
    </div>
  );
}

export default TextOutput;

//PropTypes

TextOutput.propTypes = {
  idName: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.string,
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
