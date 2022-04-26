import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageIntro from '@/components/layout/PageLayout/PageIntro';
import Typography from '@/components/shared/Typography';
import Button from '@/components/shared/Button';

const HomePage = () => (
  <PageLayout
    title="Oups"
    intro={
      <PageIntro fullHeight>
        <Typography variant="h1" className="display-3 mb-5" uppercase light>
          <span className="io-brand-meetup">Oups!</span> la page que vous
          cherchez n'existe pas.
        </Typography>
        <Button outline size="lg" href="/">
          Retourner à l'accueil
        </Button>
      </PageIntro>
    }
  />
);

export default HomePage;
