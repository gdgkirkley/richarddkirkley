exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
  }

  const posts = result.data.allMdx.edges;

  posts.map((post) => {
    actions.createPage({
      path: `${post.node.frontmatter.slug}`,
      component: require.resolve(`./src/templates/photo.js`),
      context: {
        slug: post.node.frontmatter.slug,
      },
    });
  });
};
