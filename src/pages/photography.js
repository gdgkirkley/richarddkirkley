import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Masonry, { Item } from "../components/Masonry";

const Photography = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const handleContext = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <h1>Photography</h1>
      <Masonry>
        {edges.map((edge) => (
          <Item
            key={edge.node.frontmatter.imageAlt}
            onContextMenu={handleContext}
          >
            <Link to={`${edge.node.frontmatter.slug}`}>
              <img
                src={`${edge.node.frontmatter.image}?width=500`}
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
