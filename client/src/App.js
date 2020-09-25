import React from "react";
import GlobalStyles from "./GlobalStyles";
import BasicLayout from "./stories/Pages/BasicLayout";
import userImg from "../src/stories/assets/logo.svg";

function App() {
  return (
    <>
      <GlobalStyles />
      <BasicLayout
        link="#"
        title="Teilnehmer"
        user="Admin"
        imgPath={userImg}
        imgTitle="User icon"
      />
    </>
  );
}

export default App;
