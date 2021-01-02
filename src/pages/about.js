import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const AboutText = styled.div`
  margin-right: 3rem;
`;

const About = ({ data }) => {
  return (
    <Layout>
      <h1>About</h1>
      <AboutContainer>
        <AboutText>
          <p>
            I have been an Artist/ Photographer for over 60 years. My first
            Pentax camera was a Spotmatic F in 1974. I went digital with a K100D
            in 2007. Upgraded to a K20D in 2009. I gave in to temptation and
            bought a K-5 in September 2011.
          </p>
          <p>
            I am primarily a landscape photographer but have an almost equal
            interest in macro and close-up. However I am also a painter of
            mostly abstract images and am moving towards using the medium of
            photography in a similar way.
          </p>
          <p>
            Camera Bag: K100D, K20Dsmc 50mmF1.4, smc 135mmF3.5, Bellows-Takumar
            100mmF4, smc M 50mmF1.7, smc DA 18-55mm F3.5-5.6 AL WR, smc DA L
            55-300mm F4-5.8 ED
          </p>
        </AboutText>
        <div>
          <Img fluid={data.file.childImageSharp.fluid} alt="Richard Kirkley" />
        </div>
      </AboutContainer>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "richardkirkley.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
