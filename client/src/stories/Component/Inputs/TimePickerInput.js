import React from "react";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function TimePickerInput({ idName, label }) {
  const [selectedTime, setSelectedTime] = React.useState();

  const handleTimeChange = (date) => {
    setSelectedTime(date);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          margin="normal"
          id={idName}
          ampm={false}
          variant="inline"
          label={label}
          value={selectedTime}
          onChange={handleTimeChange}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default TimePickerInput;

//PropTypes

TimePickerInput.propTypes = {
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
