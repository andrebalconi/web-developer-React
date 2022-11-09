import React from "react";
import { render, screen } from "test-utils";

import Home from "components/pages/Home";

test("renders Home page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Navigate/i);
  expect(linkElement).toBeInTheDocument();
});
