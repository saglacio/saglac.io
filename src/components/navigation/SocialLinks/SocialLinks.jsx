import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faDiscord,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Button from '@/components/shared/Button';

const SocialLinks = ({
  className,
  // button props
  size,
  outline,
  color,
  btnClassName,

  // links
  facebook,
  twitter,
  linkedIn,
  github,
  discord,
  other,
}) => {
  const btnProps = {
    className: btnClassName,
    size,
    outline,
    color,
    target: '_blank',
  };

  return (
    <div className={classNames('social-links', className)}>
      {facebook && (
        <Button
          {...btnProps}
          icon={<FontAwesomeIcon icon={faFacebookF} />}
          href={facebook}
        />
      )}
      {linkedIn && (
        <Button
          {...btnProps}
          icon={<FontAwesomeIcon icon={faLinkedinIn} />}
          href={linkedIn}
        />
      )}
      {twitter && (
        <Button
          {...btnProps}
          icon={<FontAwesomeIcon icon={faTwitter} />}
          href={twitter}
        />
      )}
      {github && (
        <Button
          {...btnProps}
          icon={<FontAwesomeIcon icon={faGithub} />}
          href={github}
        />
      )}
      {discord && (
        <Button
          {...btnProps}
          icon={<FontAwesomeIcon icon={faDiscord} />}
          href={discord}
        />
      )}
      {other && (
        <Button
          {...btnProps}
          icon={<FontAwesomeIcon icon={faLink} />}
          href={other}
        />
      )}
    </div>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string,
  btnClassName: PropTypes.string,
  size: Button.propTypes.size,
  outline: Button.propTypes.outline,
  color: Button.propTypes.color,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  linkedIn: PropTypes.string,
  discord: PropTypes.string,
  github: PropTypes.string,
  other: PropTypes.string,
};

export default SocialLinks;
