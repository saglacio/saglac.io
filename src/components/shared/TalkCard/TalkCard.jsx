import React from 'react';
import Card from 'reactstrap/lib/Card';
import CardImg from 'reactstrap/lib/CardImg';
import CardImgOverlay from 'reactstrap/lib/CardImgOverlay';
import Typography from '@/components/shared/Typography';
// import DefaultTalkImage from '~/static/images/default-talk.jpg';
import { talkType } from '@/types';
import './TalkCard.scss';

const TalkCard = ({ talk: { title, authors } }) => (
  <Card className="io-talk-card">
    <CardImgOverlay className="details">
      <Typography variant="h4" className="title">
        {title}
      </Typography>
      <Typography variant="span" light className="authors">
        <em>{authors.name}</em>
      </Typography>
    </CardImgOverlay>
  </Card>
);

TalkCard.propTypes = {
  talk: talkType.isRequired,
};

export default TalkCard;
