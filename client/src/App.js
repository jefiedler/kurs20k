import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Page from "./stories/Page";

function App() {
  return (
    <div className="App">
      <Page />
      <a href="/storybook">To Storybook</a>
    </div>
  );
}

export default App;
