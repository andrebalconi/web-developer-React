import React from "react";
import styled from "styled-components";
import {
  FaPhone,
  FaMailBulk,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={2}>
        <div>
          <Heading>
            <h6>Mission</h6>
            <p>
              My work is more than a profession — it is a way to create meaningful impact.
            </p>
            <p>
              I am motivated by the opportunity to improve people's daily lives through technology. By focusing on customer needs, quality, and continuous improvement, I strive to build solutions that are reliable, efficient, and genuinely valuable.
            </p>
            <p>
              I believe that sustainable innovation comes from responsibility, collaboration, and a constant commitment to excellence.
            </p>
          </Heading>
        </div>
        <Grid md={2}>
          <div>
            <Heading>
              <h6>Contacts</h6>
              <p>
                <IconContainer>
                  <FaPhone />
                </IconContainer>
                +55(11)9299-3141
              </p>
              <p>
                <IconContainer>
                  <FaMailBulk />
                </IconContainer>
                <FooterLink href="mailto:andrebalconi@icloud.com">
                  Send me a email
                </FooterLink>
              </p>
            </Heading>
          </div>
          <div>
            <Heading>
              <h6>Social Media</h6>
              <p>
                <FooterLink target="_blank">
                  <IconContainer>
                    <FaFacebookF />
                  </IconContainer>
                  Facebook
                </FooterLink>
              </p>
              <p>
                <FooterLink
                  target="_blank"
                  href="https://br.linkedin.com/in/andr%C3%A9-balconi-738a9a111"
                >
                  <IconContainer>
                    <FaLinkedinIn />
                  </IconContainer>
                  LinkedIn
                </FooterLink>
              </p>
              <p>
                <FooterLink target="_blank">
                  <IconContainer>
                    <FaTwitter />
                  </IconContainer>
                  Twitter
                </FooterLink>
              </p>
            </Heading>
          </div>
        </Grid>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
