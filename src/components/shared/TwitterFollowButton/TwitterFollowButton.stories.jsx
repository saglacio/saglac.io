import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import config from '~/SiteConfig';
import TwitterFollowButton from './TwitterFollowButton';

export default {
  title: 'Shared/Twitter',
};

export const FollowButton = () => {
  const expanded = boolean('Include the count? (expanded)', false);
  const username = text('Username', config.twitter);
  return <TwitterFollowButton username={username} expanded={expanded} />;
};
