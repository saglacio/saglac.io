import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import PageLayout from '@/components/layout/PageLayout';
import Typography from '@/components/shared/Typography';
import Button from '@/components/shared/Button';

const QRCodePage = () => (
  <PageLayout title="Wow un code QR!?">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-5">
          <img src="/images/qrcode-mind-blown.gif" alt="QR Code Mind Blown" />
        </div>
        <div className="col-md-7">
          <Typography variant="h2">Les gens utilisent ça encore?</Typography>
          <p>Vous l'avez utilisé, clairement!</p>
          <p>
            Prenez le temps de visiter notre site, parce que vous avez le temps
            on dirait, pour en apprendre davantage sur l'événement.
          </p>
        </div>
      </div>
      <div className="actions actions-centered">
        <Button href="/" variant="primary" size="lg">
          Plus d'info
        </Button>
        <Button
          href="https://www.facebook.com/saglacio/"
          variant="secondary"
          size="lg"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookSquare} /> Page Facebook
        </Button>
      </div>
    </div>
  </PageLayout>
);

export default QRCodePage;
