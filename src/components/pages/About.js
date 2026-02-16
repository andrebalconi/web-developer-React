import React from 'react'
import styled from 'styled-components'

import { useScrolltoTop } from 'hooks/scroll'

import Hero from 'components/molecules/Hero'
import Heading from 'components/atoms/Heading'
import Section from 'components/molecules/Section'
import Grid from 'components/atoms/Grid'
import Footer from 'components/organisms/Footer'

import BreadCrumb from 'components/atoms/BreadCrumb'

import HeroImage from 'assets/IMG_3472_1.png'
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
            <p>André Balconi</p>
            <p>
              <p><strong style={{ fontWeight: 'bold' }}>Senior Software Engineer | Financial Systems | 20 Years of Experience</strong></p>
            </p>
            <p>
              I am a Brazilian software engineer with 20 years of experience in the financial services industry, working in banking and private pension systems since 2006.
            </p>
            <p>
              My career began at the largest private bank in Brazil, where I contributed to the automation of credit card operational processes. Since then, I have focused on designing, developing, and optimizing scalable, high-availability web applications in regulated financial environments.

            </p>
            <p>
              I am currently working as a Software Engineer at UBS, contributing to the development and maintenance of enterprise-grade financial systems. My role involves collaborating with cross-functional teams, ensuring code quality, architectural consistency, and alignment with business and compliance requirements.
            </p>
            <p style={{ fontWeight: 'bold' }}>Technical Expertise</p>
            <ul>
              <li>NET Framework / .NET Core</li>
              <li>ASP.NET</li>
              <li>C#</li>
              <li>JavaScript</li>
              <li>Angular & React</li>
              <li>Microsoft SQL Server</li>
              <li>Git & TFS</li>
            </ul>
            <p>
              I consistently apply Object-Oriented Programming principles and SOLID design practices, with strong experience in Agile methodologies such as Scrum and XP. I prioritize clean architecture, maintainability, performance optimization, and long-term system sustainability.
            </p>
            <p>
              With a solid background in financial systems and enterprise environments, I am seeking opportunities in the European market where I can contribute with my technical expertise while continuing to grow in modern architectures and distributed systems.
            </p>
          </div>
          <div>
            <p>

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
