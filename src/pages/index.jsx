/**
 * To temporarily patch for missing `export default` in the file.
 * @see https://github.com/gatsbyjs/gatsby/issues/12384
 */
import React from 'react';
import { graphql } from 'gatsby';
import IndexPage from '../components/pages/IndexPage';

export default function Index({
  data: {
    latestEvent: {
      nodes: [latestEvent],
    },
  },
}) {
  return <IndexPage event={latestEvent} />;
}

export const pageQuery = graphql`
  query LatestEvent {
    latestEvent: allIoEventsYaml(
      sort: { fields: date, order: DESC }
      limit: 1
    ) {
      totalCount
      nodes {
        id
        title
        description
        formattedDate: date(
          formatString: "dddd DD MMMM YYYY, [à] LT"
          locale: "fr"
        )
        date
        event_url
        talks {
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
          address
          url
          facebook
          description
          map
        }
      }
    }
  }
`;
