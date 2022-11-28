import React from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Button from "components/atoms/Button";
import Footer from "components/organisms/Footer";
import Grid from "components/atoms/Grid";

import Callout, {
  CalloutBody,
  CallautActions,
  CalloutMedia,
} from "components/atoms/Callout";

import HeroImage from "assets/hero.jpg";

import SpeedImage from "draws/Speed";
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

const ProductDetail = ({ product }) => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>{product.title}</h1>
      </Heading>
      <BreadCrumb
        //items={[
        //  { label: "Home", link: "/" },
        //  { label: "Sevices" },
        //  { label: product.title },
        //]}
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

ProductDetail.defaultProps = {
  product: {},
};

ProductDetail.propTypes = {
  product: ProductType,
};

export default ProductDetail;
