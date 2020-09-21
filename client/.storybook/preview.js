import React from "react";
import GlobalStyles from "../src/GlobalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const AppDecorator = (Story, context) => (
  <>
    <GlobalStyles />
    <Story {...context} />
  </>
);
export const decorators = [AppDecorator];
