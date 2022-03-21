import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Section from '@/components/shared/Section';
import LocationInfo from '@/components/shared/LocationInfo';
import { eventType } from '@/types';
import TalkCard from '@/components/shared/TalkCard';
import Button from '@/components/shared/Button';
import Typography from '@/components/shared/Typography';

const TALK_LAYOUT = [2, 2, 3, 2];

const NextEventSection = ({
  event: {
    title,
    // date,
    formattedDate,
    event_url,
    location,
    talks,
    description,
  },
}) => (
  <>
    <Section
      id="next-event"
      title="Prochain événement"
      subtitle={formattedDate}
    >
      <div className="mb-3">
        {talks.length > 0 && (
          <Row>
            {talks.map((talk) => (
              <Col
                key={talk.title}
                xs={12}
                lg={12 / (TALK_LAYOUT[talks.length - 1] ?? 3)}
              >
                <TalkCard talk={talk} />
              </Col>
            ))}
          </Row>
        )}
        <LocationInfo location={location} />
      </div>
      <Row>
        <Col xs={12} lg={4}>
          <Typography variant="h4" uppercase>
            La formule
          </Typography>
          <Typography>
            {description ||
              `Réseautage, discussions et présentations.
               Courtes présentations de 5-15 minutes sur des sujets reliés à
               l'informatique et aux technologies s'y rattachant.`}
          </Typography>
        </Col>
        <Col xs={12} lg={4}>
          <Typography variant="h4" uppercase>
            À quel prix?
          </Typography>
          <Typography>
            L'événement est totalement gratuit. Par contre, toute consommation
            est généralement aux frais du participant.
          </Typography>
        </Col>
        <Col xs={12} lg={4}>
          <Typography variant="h4" uppercase>
            Pour qui?
          </Typography>
          <Typography>
            Ouvert au public, tous les passionnés de technologies, autant
            professionnels qu'amateurs, sont invités à se joindre à nous.
          </Typography>
        </Col>
      </Row>
    </Section>

    <Section secondary>
      <Row>
        <Col xs={12} className="text-center">
          <Typography variant="h4">{title}</Typography>
          {description && <Typography>{description}</Typography>}
          <Button size="lg" tag="a" href={event_url} target="_blank">
            Je participe
          </Button>
        </Col>
      </Row>
    </Section>
  </>
);

NextEventSection.propTypes = {
  event: eventType,
};

export default NextEventSection;
