import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
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
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  outline: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'conference', 'dark']),
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  linkedIn: PropTypes.string,
  github: PropTypes.string,
  other: PropTypes.string,
};

export default SocialLinks;
