import React from 'react';
import { graphql } from 'gatsby';
import ArchivesPage from '@/components/pages/ArchivesPage';

export default function Archives({
  data: {
    allIoEventsYaml: { nodes },
  },
}) {
  return <ArchivesPage events={nodes} />;
}

export const pageQuery = graphql`
  query ArchivesData {
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
