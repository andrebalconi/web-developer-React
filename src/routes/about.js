import React from "react";

import AboutPage from "components/pages/About";

import { useScrolltoTop } from "hooks/scroll";

const About = () => {
  useScrolltoTop();

  return <AboutPage />;
};

export default About;
