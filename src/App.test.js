import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Button Navigate to action", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Navigate/i);
  expect(linkElement).toBeInTheDocument();
});

