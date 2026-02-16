import React from "react";

import { useScrolltoTop } from "hooks/scroll";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Grid from "components/atoms/Grid";

import BreadCrumb from "components/atoms/BreadCrumb";
import ProductType from "models/types/ProductType";

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
            <a href={product.address} target="_blank" rel="noreferrer">
              <p>Check!</p>
            </a>
          </div>
          <div>
            <img src={product.imagepage} width="100%" alt="" />
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
