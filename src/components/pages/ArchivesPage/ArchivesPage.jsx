import React from 'react';
import { Link } from 'gatsby';
import Layout from '@/components/layout/PageLayout/PageLayout';
import Section from '@/components/shared/Section';
import './ArchivesPage.scss';

const ArchivesPage = ({ events }) => (
  <Layout title="Archives">
    <Section>
      {events.map((event) => (
        <div className="event-card" key={event.id}>
          <h2>{event.title}</h2>
          <p className="event-date">
            Date: {new Date(event.date).toLocaleDateString()}
          </p>
          <p className="event-location">Lieu: {event?.location?.name}</p>
          {event?.talks?.map((talk, index) => (
            <div className="talk-card" key={`event-${index}`}>
              <h3>{talk?.title}</h3>
              <p className="talk-author">
                Présenté par:{' '}
                {/* TODO: support multiple authors */}
                {talk?.authors?.name || (
                  <span className="error-message">
                    ERREUR: veuillez ajouter le fichier `.yml` pour cette
                    personne dans le répertoire `data/authors`.
                  </span>
                )}
              </p>
            </div>
          ))}
          <Link className="event-link" to={event.event_url}>
            Lien vers l'évènement
          </Link>
        </div>
      ))}
    </Section>
  </Layout>
);

export default ArchivesPage;
