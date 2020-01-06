import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import config from '~/SiteConfig';
import Page from '@/components/layout/Page';
import PostListing from '@/components/PostListing/PostListing';

const TagTemplate = ({ data, pageContext: { tag } }) => (
  <Page>
    <div className="tag-container">
      <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
      <PostListing postEdges={data.allMarkdownRemark.edges} />
    </div>
  </Page>
);

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
