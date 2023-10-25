import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Typography from '@/components/shared/Typography';
import Button from '@/components/shared/Button';
import Section from '@/components/shared/Section';

const AboutPage = () => (
  <PageLayout title="À propos de SagLac IO">
    <Section>
      <Typography variant="h2" className="mb-3">
        Qu'est-ce que le SagLac IO?
      </Typography>
      <p>
        Le Saglac IO est un rassemblement technologique mensuel gratuit dans la
        région du Saguenay—Lac-St-Jean, organisé par une communauté
        d'enthousiastes de la technologie. Ces rencontres, ouvertes à tous,
        permettent aux professionnels et aux amateurs de partager leur passion
        et leurs dernières découvertes dans le domaine informatique à travers
        des discussions, du réseautage et des présentations courtes. Les
        événements ont lieu alternativement entre Saguenay et Alma, avec une
        date fixée chaque mois en fonction de la disponibilité des organisateurs
        et des présentateurs.
      </p>
      <Typography variant="h2" className="mb-3">
        Historique rapide
      </Typography>
      <p>
        Automne 2013, Jean-Philippe Boily, de retour en région après plusieurs
        années, s'inspire de l'
        <a href="https://www.opencode.ca/" target="_blank" rel="noreferrer">
          OpenCode
        </a>{' '}
        de Québec pour créer un regroupement technologique local. Ainsi naît le
        SagLac IO en octobre 2013, proposant depuis des rencontres mensuelles
        alternées entre Saguenay et Alma.
      </p>
      <p>
        En 2019,{' '}
        <a href="https://conference.saglac.io" target="_blank" rel="noreferrer">
          une journée complète de conférence
        </a>{' '}
        est organisée avec des conférenciers locaux et internationaux, et près
        de 200 participants de la région et de l'extérieur.
      </p>
      <Typography variant="h2" className="mb-3">
        Presse
      </Typography>
      <p>
        L'IO a gagné en visibilité dès Janvier 2014 lors du passage de{' '}
        <a
          href="https://twitter.com/aspleenic"
          target="_blank"
          rel="noreferrer"
        >
          PJ Hagerty
        </a>{' '}
        à Alma, attirant l'attention de plusieurs médias régionaux.
      </p>
      <ul>
        <li>
          <a
            href="https://www.journaldequebec.com/2014/01/08/lio-prend-de-lampleur"
            target="_blank"
            rel="noreferrer"
          >
            Le Journal de Québec
          </a>
        </li>
        <li>
          <a
            href="https://web.archive.org/web/20220124160753/https://www.neomedia.com/saguenay-lac-st-jean/actualites/actualites/265742/lio-prend-de-lampleur"
            target="_blank"
            rel="noreferrer"
          >
            Le Point du Lac-St-Jean
          </a>{' '}
          (Wayback Machine)
        </li>
        <li>Le Progrès-Dimanche (version papier seulement)</li>
        <li>
          <a
            href="https://web.archive.org/web/20140107093858/http://www.lbr.ca/index.php?pageID=5&idA=21528"
            target="_blank"
            rel="noreferrer"
          >
            lbr.ca
          </a>{' '}
          (Wayback Machine)
        </li>
      </ul>
      <p>Plusieurs années plus tard, on en parle aussi à la radio 📻</p>
      <ul>
        <li>
          {/*   https://ici.radio-canada.ca/ohdio/premiere/emissions/place-publique/episodes/750416/rattrapage-mardi-24-octobre-2023 */}
          <a
            href="https://ici.radio-canada.ca/ohdio/premiere/emissions/place-publique/episodes/750416/rattrapage-mardi-24-octobre-2023"
            target="_blank"
            rel="noreferrer"
          >
            Radio-Canada - Place publique (24 octobre 2023)
          </a>
        </li>
      </ul>
      <Button size="lg" href="/faq">
        En savoir plus
      </Button>
    </Section>
  </PageLayout>
);

export default AboutPage;
