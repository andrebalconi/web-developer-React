import React from "react";
import PropTypes from "prop-types";
import {
  FaSpotify,
  FaMicrosoft,
  FaGithub,
  FaYoutube,
  FaAngleDoubleUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import About from "./About";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import HeroImage from "assets/edmonton_5.jpeg";
import ReturnTop from "components/atoms/ReturnTop";
import ProductType from "models/types/ProductType";

import AboutVideo from "assets/programming.gif";

const Home = ({ products }) => (
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
        <ProductGrid products={products} />
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
            developed mainly in the financial companies, always working in
            Microsoft Platform and differents JavaScript Front End like a
            AngularJS and ReactJS.
          </p>
          <div>
            <Button as={Link} to="/about" color="primary">
              More!
            </Button>
          </div>
        </div>
        <div>
          <img
            alt="Dev_Image"
            src={AboutVideo}
            width="100%"
            autoPlay
            playsInline
            loop
            muted
          />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Stop and Meditate</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Read!">
          Give me, Lord, keenness to understand, ability to retain, method and
          faculty to learn, subtlety to interpret, grace and abundance to speak,
          right to start, direction to progress and perfection to finish ...
          <br />
          <i>Tomás de Aquino</i>
        </Accordion>
        <Accordion title="Lis!">
          Donne-moi, Seigneur, le sens de la compréhension, la capacité de
          retenir, la méthode et la faculté d'apprendre, la subtilité à
          interpréter, la grâce et l'abondance pour parler, le droit de
          commencer, la direction du progrès et la perfection pour compléter ...
          <br />
          <i>Tomás de Aquino</i>
        </Accordion>
        <Accordion title="Lesen!">
          Gib mir, Herr, die Bereitschaft zu verstehen, die Fähigkeit zu
          behalten, die Methode und die Fähigkeit zu lernen, die Subtilität zu
          interpretieren, die Gnade und die Fülle zu sprechen, das Recht zu
          beginnen, die Richtung zum Fortschritt und die Perfektion zu
          vervollständigen ...
          <br />
          <i>Tomás de Aquino</i>
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer></Footer>
    <ReturnTop icon={<FaAngleDoubleUp />}></ReturnTop>
  </>
);

Home.defaultProps = {
  products: [],
};

Home.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default Home;
