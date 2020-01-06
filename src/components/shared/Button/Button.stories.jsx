import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Button from './Button';
import StoryWrapper from '~/stories/Wrapper';

export default {
  title: 'Shared/Button',
  decorators: [StoryWrapper()],
};

export const DefaultButton = () => {
  // const expanded = boolean('Include the count? (expanded)', false);
  const props = {
    children: text('Content', 'Click me'),
    disabled: boolean('Disabled?', false),
    className: 'ml-2',
  };
  return (
    <>
      <Button color="primary" size="lg" {...props} />
      <Button color="primary" {...props} />
      <Button {...props} />
      <Button color="dark" {...props} />
      <Button size="sm" {...props} />
    </>
  );
};
