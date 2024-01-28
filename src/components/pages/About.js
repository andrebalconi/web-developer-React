import React from 'react'
import styled from 'styled-components'

import { useScrolltoTop } from 'hooks/scroll'

import Hero from 'components/molecules/Hero'
import Heading from 'components/atoms/Heading'
import Section from 'components/molecules/Section'
import Grid from 'components/atoms/Grid'
import Footer from 'components/organisms/Footer'

import BreadCrumb from 'components/atoms/BreadCrumb'

import HeroImage from 'assets/AboutMe4.jpg'
import AboutImage from 'draws/Website'

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`

const About = () => {
  useScrolltoTop()

  return (
    <>
      <Hero image={HeroImage}>
        <Heading>
          <h1>Andre Balconi</h1>
        </Heading>
        <BreadCrumb
          items={[{ label: 'Home', link: '/' }, { label: 'About' }]}
        />
      </Hero>
      <Section>
        <Grid md={2}>
          <div>
            <p>My name is André, I'm from Brazil.</p>
            <p>
              My experience as a developer started in 2006 in the largest
              private bank in the country working in the automation od processes
              in the Credit Card operation.
            </p>
            <p>
              I have passion for my work and a great desire to share knowledge,
              which is the best way to acquire more!
            </p>
            <p>
              With over 17 years of experience, I specialize in the development
              and enhancement of cutting-edge web tools, coupled with a keen
              focus on monitoring IT projects through collaborative efforts with
              Software Factories. My expertise lies predominantly in the dynamic
              realm of the financial market, spanning the banking sector and,
              more recently, the private pension domain for the past seven
              years.
            </p>
            <p>
              Throughout my career, I have championed Object-Oriented
              Programming (OOP) principles, consistently applying the SOLID
              principles, and embraced agile project management methodologies
              such as Scrum and XP. This approach has not only streamlined
              project workflows but has also catalyzed a culture of continuous
              improvement and adaptability.
            </p>
            <p>
              My proficiency extends across a diverse array of technologies,
              encompassing the .NET Framework, ASP.NET, C#, JavaScript, and
              popular frontend frameworks like Angular and React. My version
              control mastery includes TFS and GIT, and I possess in-depth
              knowledge of database management utilizing Microsoft S2L Server.
            </p>
            <p>
              Adept at both independent project management and collaborative
              teamwork, I offer a versatile skill set to the table, ensuring not
              only the seamless development of web systems but also their
              rigorous testing and efficient maintenance. My commitment to
              staying at the forefront of technological advancements enables me
              to navigate the ever-evolving landscape of IT with agility and
              innovation.
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
  )
}

export default About
