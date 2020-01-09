import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Shared/Button',
};

const ButtonStory = (otherProps) => {
  // const expanded = boolean('Include the count? (expanded)', false);
  const props = {
    children: text('Content', 'Click me'),
    disabled: boolean('Disabled?', false),
    className: 'mr-2',
    ...otherProps,
  };
  return (
    <div className="mb-4">
      <Button color="primary" size="lg" {...props} />
      <Button color="primary" {...props} />
      <Button {...props} />
      <Button color="dark" {...props} />
      <Button size="sm" {...props} />
    </div>
  );
};

export const DefaultButtons = () => (
  <>
    <p>Default buttons</p>
    <ButtonStory />
    <p>Internal Link component buttons</p>
    <ButtonStory to="/test" />
    <p>External link buttons</p>
    <ButtonStory href="http://google.ca" target="_blank" />
  </>
);
// export const InternalLinkButtons = () => <ButtonStory to="/test" />;
// export const ExternalLinkButtons = () => <ButtonStory href="http://google.ca" target="_blank" />;
