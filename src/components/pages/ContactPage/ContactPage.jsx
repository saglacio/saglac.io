import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import config from '~/SiteConfig';
import PageIntro from '@/components/layout/PageLayout/PageIntro';
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';

const TITLE = 'Nous joindre';

const ContactPage = () => (
  <PageLayout
    title={TITLE}
    intro={
      <PageIntro fullHeight title={TITLE}>
        <form method="post" action="https://formspree.io/f/mleyzpgk">
          <Input
            type="hidden"
            name="_subject"
            value="Nouveau message du site"
          />
          <Input name="_gotcha" style={{ display: 'none' }} />
          <Input type="hidden" name="_next" value={`${config.siteUrl}/merci`} />
          <Input
            name="name"
            id="contact-name"
            placeholder="Nom"
            className="mb-3"
          />
          <Input
            name="email"
            id="contact-email"
            placeholder="Courriel"
            className="mb-3"
          />
          <Input
            name="message"
            type="textarea"
            id="contact-message"
            placeholder="Message"
            rows="4"
            className="mb-3"
          />
          <Button type="submit" size="lg">
            Envoyer
          </Button>
        </form>
      </PageIntro>
    }
  />
);

export default ContactPage;
