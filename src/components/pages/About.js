import React from "react";
import styled from "styled-components";

import { useScrolltoTop } from "hooks/scroll";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";

import BreadCrumb from "components/atoms/BreadCrumb";

import HeroImage from "assets/AboutMe4.jpg";
import AboutImage from "draws/Website";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => {
  useScrolltoTop();

  return (
    <>
      <Hero image={HeroImage}>
        <Heading>
          <h1>Andre Balconi</h1>
        </Heading>
        <BreadCrumb
          items={[{ label: "Home", link: "/" }, { label: "About" }]}
        />
      </Hero>
      <Section>
        <Grid md={2}>
          <div>
            <p>
              My name is André, I'm from Brazil.
            </p>
            <p>
              My experience as a developer started in 2006 in the largest
              private bank in the country working in the automation od processes
              in the Credit Card operation.
            </p>
            <p>
              In the last 6 years I have been working in modernization and
              website maintenance projects at Mercer Human Resource Consulting
              present in 44 countries and with operations in more than 130
              countries.
            </p>
            <p>
              I have passion for my work and a great desire to share knowledge,
              which is the best way to acquire more!
            </p>
            <p>
              Career development in a large financial company focused on Systems
              Analysis and Process Automation. Experience with process mapping
              in complex environments, Database for generating Reports and
              Performance Indicators. I have been working in the last few years
              with software development, mainly with web application development
              using C #, ASP.NET webforms, MVC, HTML, CSS, Jquery, Bootstrap,
              Angular JS, SQL Server and Methodology Agile (Scrum, XP, etc.).
            </p>
          </div>
          <div>
            <p>
              I am looking for opportunities to advance my career and develop my
              skills.
            </p>
            <center>
              <ImageContainer>
                <AboutImage />
              </ImageContainer>
            </center>
          </div>
        </Grid>
      </Section>

      <Footer />
    </>
  );
};

export default About;
