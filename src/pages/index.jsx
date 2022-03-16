/**
 * To temporarily patch for missing `export default` in the file.
 * @see https://github.com/gatsbyjs/gatsby/issues/12384
 */
import React from 'react';
import { graphql } from 'gatsby';
import IndexPage from '../components/pages/IndexPage';

export default function Index({ data: { latestEvent } }) {
  return <IndexPage event={latestEvent} />;
}

export const pageQuery = graphql`
  query LatestEvent {
    latestEvent: ioEventsYaml {
      id
      title
      date
      event_url
      talks {
        id
        title
        description
        authors {
          id
          name
          website
        }
      }
      location {
        id
        name
      }
    }
  }
`;
