import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import OfficeImage from "stories/assets/office.jpg";
import PCImage from "stories/assets/pc.jpg";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

export default {
  title: "Components/Molecules/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={OfficeImage}>
    <Heading>
      <h1>
        {text("Title", "Web Development -")}
        <br />
        <strong>{text("Emphasis", "React JS")}</strong>
      </h1>
    </Heading>
    <ul>
      <li>Modern Front-End</li>
      <li>React Components</li>
      <li>Welcome my Page!</li>
    </ul>
    <Button color="primary" variant="outlined">
      Navigate
    </Button>
  </Hero>
);

export const withList = () => (
  <Hero image={PCImage}>
    <h1>New Test Component</h1>
    <div>New testes Components</div>
    <Button>Navigate</Button>
  </Hero>
);
