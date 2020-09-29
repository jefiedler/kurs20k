import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function App() {
  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <h1>Clean up for new styling</h1>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
