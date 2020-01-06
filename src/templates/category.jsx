import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Page from '@/components/layout/Page';
import PostListing from '../components/PostListing/PostListing';
import config from '../../SiteConfig';

const CategoryTemplate = ({ data, pageContext: { category } }) => (
  <Page>
    <div className="category-container">
      <Helmet title={`Posts in category "${category}" | ${config.siteTitle}`} />
      <PostListing postEdges={data.allMarkdownRemark.edges} />
    </div>
  </Page>
);

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
