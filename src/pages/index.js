import * as React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Masonry, Item } from "./photography";
import Button from "../components/Button";

const Centered = styled.div`
  display: flex;
  place-content: center;
`;

// markup
const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout>
      <Masonry height={"1300px"}>
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
      <Centered>
        <Link to="/photography">
          <Button>See More</Button>
        </Link>
      </Centered>
    </Layout>
  );
};

export const query = graphql`
  query AllPhotosHome {
    allMdx(limit: 9) {
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

export default IndexPage;
