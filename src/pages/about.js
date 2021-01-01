import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const About = ({ data }) => {
  return (
    <Layout>
      <h3>About</h3>
      <div>
        <div>
          <p>
            I have been an Artist/ Photographer for over 60 years. My first
            Pentax camera was a Spotmatic F in 1974. I went digital with a K100D
            in 2007. Upgraded to a K20D in 2009. I gave in to temptation and
            bought a K-5 in September 2011.{" "}
          </p>
          <p>
            I am primarily a landscape photographer but have an almost equal
            interest in macro and close-up. However I am also a painter of
            mostly abstract images and am moving towards using the medium of
            photography in a similar way.
          </p>
        </div>
        <div>
          <Img src={data.file.childImageSharp.fluid} alt="Richard Kirkley" />
        </div>
      </div>
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
