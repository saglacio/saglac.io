import React from 'react';
import '@/scss/main.scss';

const styles = {
  display: 'flex',
  flex: 1,
  height: '100vh',
  'align-items': 'center',
  'justify-content': 'center',
};

const Decorator = (storyFn) => (
  <div styles={styles}>
    {storyFn()}
  </div>
);

export default Decorator;
