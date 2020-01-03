import React from 'react';
import { Follow } from 'react-twitter-widgets';

const TwitterFollowButton = ({ expanded, username }) => (
  <Follow
    username={username}
    options={{
      count: expanded ? true : 'none',
    }}
  />
);

export default TwitterFollowButton;
