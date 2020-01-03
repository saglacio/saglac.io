import React from 'react';
import cn from 'classnames';
import './Typography.scss';

const Typography = ({
  children,
  className,
  tag,
  variant,
  light,
  uppercase,
}) => {
  const Tag = tag || variant || 'p';
  return (
    <Tag className={cn('io-typography', className, {
      light,
      uppercase,
    })}
    >
      {children}
    </Tag>
  );
};

export default Typography;
