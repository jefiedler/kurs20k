import React from "react";
import GlobalStyles from "./GlobalStyles";
import BasicLayout from "./stories/Pages/BasicLayout";
import userImg from "../src/stories/assets/logo.svg";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function App() {
  return (
    <>
      <GlobalStyles />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <BasicLayout
        link="#"
        title="Teilnehmer"
        user="Admin"
        imgPath={userImg}
        imgTitle="User icon"
      />
      </MuiPickersUtilsProvider>
    </>
  );
}

export default App;
