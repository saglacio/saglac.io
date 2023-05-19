import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query ArchivesPageQuery {
    allIoEventsYaml {
      nodes {
        title
        date
        event_url
        location {
          name
          address
          url
          facebook
          description
          map
        }
        talks {
          title
          authors {
            name
            twitter
            github
            website
          }
        }
      }
    }
  }
`;

const ArchivesPage = ({ data }) => {
  const {
    allIoEventsYaml: { nodes },
  } = data;

  return <ArchivesPage events={nodes} />;
};

export default ArchivesPage;
