/**
 * To temporarily patch for missing `export default` in the file.
 * @see https://github.com/gatsbyjs/gatsby/issues/12384
 */
// export { default } from '../components/pages/IndexPage';
import React from "react";
import { graphql } from "gatsby";
import IndexPage from "../components/pages/IndexPage";

export default function Index({
  data: {
    allIoEventsYaml: { totalCount, edges },
  },
}) {
  return <IndexPage event={edges[0].node} totalCount={totalCount} />;
}

export const pageQuery = graphql`
  query LatestEvent {
    allIoEventsYaml(limit: 1) {
      totalCount
      edges {
        node {
          date
          event_url
          id
          title
          talks {
            authors {
              name
              website
            }
            description
            title
          }
          location {
            name
            id
          }
        }
      }
    }
  }
`;
