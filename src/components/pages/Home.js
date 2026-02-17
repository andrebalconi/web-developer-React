import React from "react";
import PropTypes from "prop-types";
import {
  FaReact,
  FaGithub,
  FaYoutube,
  FaAngleDoubleUp,
  FaAngular,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import HeroImage from "assets/IMG_3472_1.png";
import ReturnTop from "components/atoms/ReturnTop";
import ProductType from "models/types/ProductType";

import AboutVideo from "assets/programming.gif";

const Home = ({ products }) => (
  <>
    <div
      style={{
        position: "relative",
        width: "100%",
        marginBottom: 20,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          paddingLeft: 12,
          gap: 8,
        }}
      >
        <FaGithub size={16} />
        <FaReact size={16} />
        <FaAngular size={16} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            margin: 0,
            padding: "6px 14px",
            background: "rgba(0,0,0,0)",
            fontFamily: "Geneva, \"Lucida Grande\", \"Lucida Sans Unicode\", Tahoma, Verdana, sans-serif",
            borderRadius: 4,
          }}
        >
          André Balconi
        </h3>
      </div>
    </div>
    <Hero image={HeroImage}>
      <Heading style={{ position: 'relative', left: 10, top: 150 }}>
        <h1>
          <br /><br /><br />
        </h1>
        <ul>
          <li>Software Engineer | Investment Banking Technology | High-Reliability Systems</li>
          <li>Software Engineer at UBS, building scalable and resilient systems for financial environments.</li>
        </ul>
      </Heading>

      {/* <Button color="primary" variant="outlined">
        Navigate
      </Button> */}
    </Hero>
    <Section>
      <Grid sm={2} md={3}>
        <Feature
          icon={<FaAngular />}
          title="e Commerce"
          link="https://ecommerce-ab.fly.dev/"
        >
          <p>Technical demonstration project simulating a real-world e-commerce environment.</p>
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
            What do I do in my free time besides coding?
          </p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>My Interests</h2>
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
            I am a programmer and in the last 20 years my career has been
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
