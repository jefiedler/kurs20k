import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import PropTypes from "prop-types";
import { date } from "faker";

function DatePickerInput({ idName, label }) {
  const [selectedDate, setSelectedDate] = React.useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  console.log(selectedDate);

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          inputVariant="standard"
          format="dd/MM/yyyy"
          margin="normal"
          id={idName}
          label={label}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </>
  );
}

export default DatePickerInput;

//PropTypes

DatePickerInput.propTypes = {
  idName: PropTypes.string,
  label: PropTypes.string,
};

//Styling
