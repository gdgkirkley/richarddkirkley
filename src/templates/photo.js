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

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <ImageContainer ref={ref}>
        <img
          src={`${post.frontmatter.image}?width=${
            dimensions.width ? dimensions.width : 1200
          }`}
          alt={post.frontmatter.imageAlt}
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
          }
          body
        }
      }
    }
  }
`;

export default Photo;
