import React from 'react';
import './StoryWrapper.scss';

export default (styles) => (storyFn) => (
  <div className="io-story-wrapper" style={styles || null}>
    {storyFn()}
  </div>
);
