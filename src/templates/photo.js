import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import useDimensions from "../hooks/useDimensions";

const ImageContainer = styled.div`
  width: 100%;

  & img {
    width: 100%;
  }
`;

const Photo = ({ data: { postData } }) => {
  const post = postData.edges[0].node;

  const [ref, dimensions] = useDimensions();

  const handleContext = (e) => {
    e.preventDefault();
  };

  const { frontmatter } = post;

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      {frontmatter.date ? <p>Taken {frontmatter.date}</p> : null}
      <div>
        <p>
          {frontmatter.camera ? frontmatter.camera : null}
          {frontmatter.ISO ? ` | ISO: ${frontmatter.ISO}` : null}
          {frontmatter.fstop ? ` | F-stop: ${frontmatter.fstop}` : null}
          {frontmatter.exposure ? ` | Exposure: ${frontmatter.exposure}` : null}
          {frontmatter.focalLength
            ? ` | Focal Length: ${frontmatter.focalLength}`
            : null}
        </p>
      </div>
      <ImageContainer ref={ref} onContextMenu={handleContext}>
        <img
          src={`${frontmatter.image}?width=${
            dimensions.width ? dimensions.width : 1200
          }`}
          alt={frontmatter.imageAlt}
        />
      </ImageContainer>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    postData: allMdx(filter: { frontmatter: { slug: { eq: $slug } } }) {
      edges {
        node {
          frontmatter {
            title
            image
            imageAlt
            slug
            camera
            ISO
            fstop
            exposure
            focalLength
            date(formatString: "LL")
          }
          body
        }
      }
    }
  }
`;

export default Photo;
