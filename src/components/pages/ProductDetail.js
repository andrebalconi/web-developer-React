import React from "react";
import styled from "styled-components";

import { useScrolltoTop } from "hooks/scroll";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Button, { ButtonLink } from "components/atoms/Button";
import Footer from "components/organisms/Footer";
import Grid from "components/atoms/Grid";

import { Link } from "react-router-dom";
import BreadCrumb from "components/atoms/BreadCrumb";

import ProductType from "models/types/ProductType";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const Pages = styled.img`
  width: 1124px;
  height: 739px;
`;

const ProductDetail = ({ product }) => {
  useScrolltoTop();

  return (
    <>
      <Hero image={product.imageHero}>
        <Heading>
          <h1>{product.title}</h1>
        </Heading>
        <BreadCrumb
          items={[
            { label: "Home", link: "/" },
            { label: "Sevicos" },
            { label: product.title },
          ]}
        />
      </Hero>
      <Section inverse>
        <Grid md={2}>
          <div>
            <Heading>
              <h6>{product.summary}</h6>
            </Heading>
            <a href={product.address} target="_blank">
              <p>Check!</p>
            </a>
          </div>
          <div>
            <img src={product.imagepage} width="100%" />
          </div>
        </Grid>
      </Section>

      <Footer />
    </>
  );
};

ProductDetail.defaultProps = {
  product: {},
};

ProductDetail.propTypes = {
  product: ProductType,
};

export default ProductDetail;
