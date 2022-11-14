import React from "react";

import Card, { CardBody, CardMedia, CardMediaDescription } from "./Card";
import Section from "components/molecules/Section";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

import PlaceholderImage from "stories/assets/hard-disc.jpg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia, CardMediaDescription },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Title</h6>
        </Heading>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div>
          <Button color="primary" variant="link">
            Come in!
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImage} />
      <CardBody>
        <Heading>
          <h6>Title</h6>
        </Heading>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div>
          <Button color="primary" variant="link">
            Come in!
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const onlyMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImage}>
        <CardMediaDescription>
          <h5>Description Image</h5>
        </CardMediaDescription>
      </CardMedia>
    </Card>
  </Section>
);
