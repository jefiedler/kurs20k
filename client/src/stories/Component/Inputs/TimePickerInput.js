import React from "react";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import PropTypes from "prop-types";
import { date } from "faker";

function TimePickerInput({ idName, label }) {
  const [selectedTime, setSelectedTime] = React.useState();

  const handleTimeChange = (date) => {
    setSelectedTime(date);
  };

  console.log(selectedTime);

  return (
    <div>
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

//Proptyps

TimePickerInput.propTypes = {
  idName: PropTypes.string,
  label: PropTypes.string,
};

//Styling
