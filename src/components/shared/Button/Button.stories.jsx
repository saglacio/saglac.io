import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Button from './Button';

export default {
  title: 'Shared/Button',
};

const ButtonStory = (otherProps) => {
  const props = {
    children: text('Content', 'Click me'),
    disabled: boolean('Disabled?', false),
    icon: boolean('Icon?', false) ? <FontAwesomeIcon icon={faFacebookF} /> : null,
    ...otherProps,
  };

  return (
    <div className="mb-4">
      <div className="bg-dark d-inline-block p-1">
        <Button color="primary" size="lg" {...props} />
        <Button color="primary" {...props} />
      </div>
      <Button {...props} />
      <Button color="dark" {...props} />
      <Button size="sm" {...props} />
      <br />
      <Button color="link" size="lg" {...props} />
      <Button color="link" {...props} />
      <Button color="link" size="sm" className="text-light" {...props} />
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
