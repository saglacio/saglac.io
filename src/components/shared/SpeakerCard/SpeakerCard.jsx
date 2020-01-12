import React from 'react';
import Card from 'reactstrap/lib/Card';
import CardImg from 'reactstrap/lib/CardImg';
import CardImgOverlay from 'reactstrap/lib/CardImgOverlay';
import DefaultTalkImage from '~/static/images/default-talk.jpg';
import './SpeakerCard.scss';
import Typography from '../Typography';

const SpeakerCard = ({ src, author, talk }) => (
  <Card className="io-speaker-card">
    <CardImg src={src || DefaultTalkImage} alt="Card image cap" />
    <CardImgOverlay className="details">
      <Typography variant="h4" className="mb-1">
        {author}
      </Typography>
      <Typography variant="span" light>
        <em>{talk}</em>
      </Typography>
    </CardImgOverlay>
  </Card>
);

export default SpeakerCard;
