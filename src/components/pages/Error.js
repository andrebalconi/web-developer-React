import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import Grid from "components/atoms/Grid";
import Section from "components/molecules/Section";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

const ImageContainer = styled.div`
  text-align: right;

  svg {
    width: 100%;
    height: auto;
    max-width: 400%;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const ErrorContent = styled.div`
  h1 {
    margin-top: 0;
  }
`;

const ErrorMessage = styled.p`
  margin: 24px 0;
  font-size: 1.2rem;
`;

const Error = ({ image, title, description }) => (
  <Section>
    <Grid sm={2}>
      <ErrorContent>
        <Heading>
          <h1>{title}</h1>
        </Heading>
        <ErrorMessage>{description}</ErrorMessage>
        <div>
          <Button as={Link} to="/" color="primary">
            Ir para a pagina inicial
          </Button>
        </div>
      </ErrorContent>
      <div>
        <ImageContainer>{image}</ImageContainer>
      </div>
    </Grid>
  </Section>
);

Error.defaultProps = {
  image: undefined,
  titulo: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  titulo: PropTypes.string,
  description: PropTypes.string,
};

export default Error;
