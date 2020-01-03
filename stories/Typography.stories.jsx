import React from 'react';

export default {
  title: 'Global|Typography',
};

const TEXT = 'À propos du Saglac IO';

export const titles = () => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((Tag) => (
  <Tag>{TEXT}</Tag>
));

// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
