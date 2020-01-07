import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Shared/Button',
};

export const DefaultButtons = (otherProps) => {
  // const expanded = boolean('Include the count? (expanded)', false);
  const props = {
    children: text('Content', 'Click me'),
    disabled: boolean('Disabled?', false),
    className: 'ml-2',
    ...otherProps,
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

export const InternalLinkButtons = () => <DefaultButtons to="/test" />;
export const ExternalLinkButtons = () => <DefaultButtons href="http://google.ca" target="_blank" />;