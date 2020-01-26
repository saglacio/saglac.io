import React from 'react';
import cn from 'classnames';
import './Typography.scss';

const TITLE_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Typography = ({
  children,
  className,
  tag,
  variant,
  light,
  lead,
  size,
  uppercase,
}) => {
  const Tag = tag || variant || 'p';
  return (
    <Tag className={cn('io-typography', className, {
      title: TITLE_TAGS.includes(Tag),
      light,
      uppercase,
      lead,
      [`text-${size}`]: size,
    })}
    >
      {children}
    </Tag>
  );
};

export default Typography;
