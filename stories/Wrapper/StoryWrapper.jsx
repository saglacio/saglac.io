import React from 'react';
import './StoryWrapper.scss';

export default function StoryWrapper(styles) {
  return (storyFn) => (
    <div className="io-story-wrapper" style={styles || null}>
      {storyFn()}
    </div>
  );
}
