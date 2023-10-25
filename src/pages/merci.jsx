import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageIntro from '@/components/layout/PageLayout/PageIntro';

const ContactSuccess = () => (
  <PageLayout
    title="Message envoyé"
    intro={<PageIntro fullHeight title="Merci de nous avoir contacté" />}
  />
);

export default ContactSuccess;
