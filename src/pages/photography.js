import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

export const Masonry = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  /* Your container needs a fixed height, and it 
   * needs to be taller than your tallest column. */
  height: ${(props) => (props.height ? props.height : "7600px")};

  @media (max-width: 768px) {
    height: 2800px;
  }

  &::before,
  ::after {
    content: "";
    flex-basis: 100%;
    width: 0;
    order: 2;
  }
`;

export const Item = styled.div`
  width: 32%;
  margin-bottom: 2%;

  &:nth-child(3n + 1) {
    order: 1;
  }
  &:nth-child(3n + 2) {
    order: 2;
  }
  &:nth-child(3n) {
    order: 3;
  }

  & img {
    width: 100%;
  }
`;

const Photography = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout>
      <h1>Photography</h1>
      <Masonry>
        {edges.map((edge) => (
          <Item key={edge.node.frontmatter.imageAlt}>
            <Link to={`${edge.node.frontmatter.slug}`}>
              <img
                src={`${edge.node.frontmatter.image}?width=400`}
                alt={edge.node.frontmatter.imageAlt}
              />
            </Link>
          </Item>
        ))}
      </Masonry>
    </Layout>
  );
};

export const query = graphql`
  query AllPhotos {
    allMdx(sort: { fields: frontmatter___title }) {
      edges {
        node {
          frontmatter {
            slug
            image
            imageAlt
          }
        }
      }
    }
  }
`;

export default Photography;
