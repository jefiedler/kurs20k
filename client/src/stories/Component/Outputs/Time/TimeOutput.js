import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

function TimeOutput({ idName, label, time }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker
          readOnly
          disableToolbar
          margin="normal"
          id={idName}
          ampm={false}
          variant="inline"
          label={label}
          value={time}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default TimeOutput;

//PropTypes

TimeOutput.propTypes = {
  idName: PropTypes.string,
  label: PropTypes.string,
  time: PropTypes.string,
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
