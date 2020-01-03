import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import config from '~/SiteConfig';
import TwitterFollowButton from './TwitterFollowButton';

export const TwitterFollowButtonStory = () => {
  const expanded = boolean('Include the count? (expanded)', false);
  const username = text('Username', config.userTwitter);
  return (
    <TwitterFollowButton
      username={username}
      expanded={expanded}
    />
  );
};

export default {
  category: 'test',
  title: 'Shared|Twitter follow',
  // component: TwitterFollowButtonStory,
};
