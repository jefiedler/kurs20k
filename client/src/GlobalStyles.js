import React from "react";
import { Global, css } from "@emotion/core";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap");

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        html {
        }
        body {
          background-color: #f2f2f2;
          font-family: "Roboto", sans-serif;
          margin: 0;
        }
      `}
    />
  );
};

export default GlobalStyles;
