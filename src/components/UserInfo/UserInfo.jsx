import React from 'react';
import { Follow } from 'react-twitter-widgets';

const UserInfo = ({ expanded, config: { userTwitter } }) => (
  <Follow
    username={userTwitter}
    options={{
      count: expanded ? true : 'none',
    }}
  />
);

export default UserInfo;
