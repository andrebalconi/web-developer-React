import React from "react";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Grid from "components/atoms/Grid";
import Feature from "./Feature";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature icon={<FaCar />} title="Title">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  </Feature>
);

export const withGrid = () => (
  <Grid sm={2} md={4}>
    <Feature icon={<FaCar />} title="Transport">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </Feature>
    <Feature icon={<FaKey />} title="Security">
      <p>Lorem ipsum.</p>
    </Feature>
    <Feature icon={<FaMapMarkedAlt />} title="Great Location">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </Feature>
    <Feature icon={<FaAccessibleIcon />} title="Accessibility">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </Feature>
  </Grid>
);
