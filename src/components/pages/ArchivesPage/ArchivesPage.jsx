import React from 'react';
import { Link } from 'gatsby';
import Layout from '@/components/layout/PageLayout/PageLayout';
import Section from '@/components/shared/Section';
import './ArchivesPage.scss';

const ArchivesPage = ({ events }) => {
  const getAvatarUrl = (author) => {
    if (author.avatar) {
      return author.avatar;
    }
    if (author.github) {
      return `https://avatars.githubusercontent.com/${author.github}`;
    }
    if (author.twitter) {
      return `https://unavatar.io/twitter/${author.twitter}`;
    }
    return '/images/default_user_icon.png';
  };

  return (
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
              <div className="talk-card" key={`talk-${index}`}>
                <h3>{talk?.title}</h3>
                <p className="talk-author">
                  Présenté par:{' '}
                  {/*TODO: add support for multiple authors, not sure what's wrong with the graphql schema 🤷 */}
                  {talk.authors ? (
                    <span key={talk.authors.id} className="author-info">
                      <img
                        src={getAvatarUrl(talk.authors)}
                        alt={talk.authors.name}
                        className="author-avatar"
                      />
                      {talk.authors.name}
                    </span>
                  ) : (
                    // TODO: add a way to support bio, github link, twitter link, website link, etc.
                    <span className="error-message">
                      ERREUR: veuillez ajouter le fichier `.yml` pour cette
                      personne dans le répertoire `data/authors`.
                    </span>
                  )}
                </p>
                {/* TODO: fix this, graphql schema is drunk, slides is present in yaml. We probably have to
                 work with gatsby-node.js or something like that to get that working
                 also: some presentations had multiple slidedecks so let's support that */}
                {talk?.slides && (
                  <a
                    href={talk.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slides-link"
                  >
                    Voir les slides
                  </a>
                )}
              </div>
            ))}
            {event.event_url && (
              <Link className="event-link" to={event.event_url}>
                Lien vers l'évènement
              </Link>
            )}
          </div>
        ))}
      </Section>
    </Layout>
  );
};

export default ArchivesPage;
