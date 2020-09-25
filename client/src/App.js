import React from "react";
import BasicTextInput from "../src/stories/Component/Inputs/BasicTextInput";
import DatePickerInput from "../src/stories/Component/Inputs/DatePickerInput";
import SalutationSelectorInput from "../src/stories/Component/Inputs/SalutationSelectorInput";
import TimePickerInput from "../src/stories/Component/Inputs/TimePickerInput";

function App() {
  return (
    <div className="App">
      <h1>Verschiedene Inputfelder:</h1>
      <BasicTextInput idName="firstName" title="Nachname" inputType="text" />
      <br />
      <BasicTextInput idName="password" title="Passwort" inputType="password" />
      <br />
      <SalutationSelectorInput />
      <br />
      <DatePickerInput />
      <br />
      <TimePickerInput />
    </div>
  );
}

export default App;
