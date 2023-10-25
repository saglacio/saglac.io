import React from 'react';
import { Link } from 'gatsby';
import Layout from '@/components/layout/PageLayout/PageLayout';
import Section from '@/components/shared/Section';

const ArchivesPage = ({ events }) => (
  <Layout title="Archives">
    <Section>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>Date: {new Date(event.date).toLocaleDateString()}</p>
          <p>Lieu: {event?.location?.name}</p>
          {event?.talks?.map((talk, index) => (
            <div key={`event-${index}`}>
              <h3>{talk?.title}</h3>
              <p>
                {console.log(talk)}
                Personne présentant: {talk?.authors?.name}
                {!talk?.authors &&
                  'ERREUR: veuillez ajouter le fichier `.yml` pour cette personne dans le répertoire `data/authors`.'}
              </p>
            </div>
          ))}
          <Link to={event.event_url}>Lien vers l'évènement</Link>
        </div>
      ))}
    </Section>
  </Layout>
);

export default ArchivesPage;
