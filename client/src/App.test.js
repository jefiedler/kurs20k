import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders storybook react link", () => {
  const { getByText } = render(<App />);
  const headingElement = getByText("styling");
  expect(headingElement).toBeInTheDocument();
});
