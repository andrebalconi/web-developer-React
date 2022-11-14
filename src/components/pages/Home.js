import React from "react";
//import PropTypes from "prop-types";
import { FaSpotify, FaMicrosoft, FaGithub, FaYoutube } from "react-icons/fa";
//wimport { Link } from "react-router-dom";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
//import About from "./About";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
//import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import HeroImage from "assets/pc.jpg";
//import ProductType from "models/types/ProductType";

import AboutVideo from "assets/programming.gif";
import News from "assets/news.jpg";

const products = [
  { id: 0, title: "News 0", summary: "News 0", image: News },
  { id: 1, title: "News 1", summary: "News 1", image: News },
  { id: 2, title: "News 2", summary: "News 2", image: News },
  { id: 3, title: "News 3", summary: "News 3", image: News },
  { id: 4, title: "News 4", summary: "News 4", image: News },
  { id: 5, title: "News 5", summary: "News 5", image: News },
];

const Home = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          <br />
          <strong>React JS</strong>
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
    <Section>
      <Grid sm={2} md={4}>
        <Feature
          icon={<FaSpotify />}
          title="My styles"
          link="https://open.spotify.com/playlist/6SoBkrXplo45UTilDxb0if?si=4ca19a4cbda64c3d"
        >
          <p>My playlist for you to enjoy!!!</p>
        </Feature>
        <Feature
          icon={<FaMicrosoft />}
          title="Microsoft Codes"
          link="http://mywebtools.azurewebsites.net/"
        >
          <p>Coming soon C# codes!</p>
        </Feature>
        <Feature
          icon={<FaGithub />}
          title="Github"
          link="https://github.com/andrebalconi"
        >
          <p>My code repository</p>
        </Feature>
        <Feature
          icon={<FaYoutube />}
          title="My Youtube Channel"
          link="https://www.youtube.com/user/dedejazz"
        >
          <p>
            In this channel I show a little of my passion for instrumental music
            and more precisely for the piano!
          </p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>News</h2>
        <ProductGrid products={products}></ProductGrid>
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Andre Balconi</h2>
          </Heading>
          <p>
            I am a programmer and in the last 16 years my career has been
            developed mainly in the financial companies, first in the banking
            area and in the last 6 years in the private pension area.
          </p>
          <div>
            <Button color="primary">More!</Button>
          </div>
        </div>
        <div>
          <img src={AboutVideo} width="100%" autoPlay playsInline loop muted />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Continuos Learning</h2>
      </Heading>
    </Section>
    <Footer></Footer>
  </>
);

//Home.defaultProps = {
//  products: [],
//};

//Home.propTypes = {
//  products: PropTypes.arrayOf(ProductType),
//};

export default Home;
