import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

function DateOutput({ idName, label }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          readOnly
          disableToolbar
          variant="inline"
          inputVariant="standard"
          format="dd/MM/yyyy"
          margin="normal"
          id={idName}
          label={label}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default DateOutput;

//PropTypes

DateOutput.propTypes = {
  idName: PropTypes.string,
  label: PropTypes.string,
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
