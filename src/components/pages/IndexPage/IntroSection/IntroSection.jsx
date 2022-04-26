import React from 'react';
import Typography from '@/components/shared/Typography';
import Button from '@/components/shared/Button';
import PageIntro from '@/components/layout/PageLayout/PageIntro';

const IntroSection = ({ eventUrl, moreInfoUrl }) => (
  <PageIntro id="intro" fullHeight>
    <Typography variant="h1" className="display-3 mb-5" uppercase light>
      Rencontre
      <br />
      technologique
      <br />
      <Typography tag="div" className="h2" uppercase>
        du Saguenay—Lac-St-Jean
      </Typography>
    </Typography>
    <Button size="lg" target="_blank" href={eventUrl}>
      Participer!
    </Button>
    <Button outline size="lg" href={moreInfoUrl}>
      En savoir plus
    </Button>
  </PageIntro>
);

export default IntroSection;
