import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '@/components/layout/PageLayout';

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
    allIoEventsYaml: { nodes: events },
  } = data;

  return (
    <Layout title="Archives">
      <section className="container">
        {events.map((event) => (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Lieu: {event.location.name}</p>
            {event.talks.map((talk) => (
              <div key={talk.id}>
                <h3>{talk.title}</h3>
                <p>
                  Auteur: {talk.authors.map((author) => author.name).join(', ')}
                </p>
              </div>
            ))}
            <Link to={event.event_url}>Lien vers l'évènement</Link>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default ArchivesPage;
