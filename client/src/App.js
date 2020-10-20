import React from "react";
import GlobalStyles from "./GlobalStyles";
import BasicLayout from "../../client/src/pages/BasicLayout";
import userImg from "../src/stories/assets/logo.svg";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShowParticipantPage from "../src/pages/ShowParticipantPage";
import EditParticipantPage from "../src/pages/EditParticipantPage";
import firmBrand from "../src/stories/assets/logo.svg";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {/* <Link to="/participant">Teilnehmer</Link> */}
        <Switch>
          <Route path="/teilnehmer">
            <ShowParticipantPage
              title="Teilnehmer"
              user="Admin"
              imgPath={firmBrand}
            />
          </Route>
          <Route path="/editParticipant">
            <EditParticipantPage
              title="Teilnehmer"
              user="Admin"
              imgPath={firmBrand}
            />
          </Route>
          <Route path="/">
            <BasicLayout
              link="#"
              title="Teilnehmer"
              user="Admin"
              imgPath={userImg}
              imgTitle="User icon"
            />
          </Route>
        </Switch>
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
