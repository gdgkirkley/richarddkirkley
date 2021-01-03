import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Masonry, { Item } from "../components/Masonry";

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
