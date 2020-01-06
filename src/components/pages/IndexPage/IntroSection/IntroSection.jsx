import React from 'react';
// import Typo
import './IntroSection.scss';
import Typography from '@/components/shared/Typography';

const IntroSection = () => (
  <section id="intro" className="io-intro-section">
    <div className="intro-container">
      <Typography variant="h1">
      Saglac IO
      </Typography>
      <Typography>
      Rencontre technologique du Saguenay—Lac-St-Jean
      </Typography>
    </div>
  </section>
);

export default IntroSection;
