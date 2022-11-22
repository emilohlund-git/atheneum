import React, { FC } from 'react';
import { LinkVariants } from '../types/Variants';
import { LinkProps } from './Link.types';

const getColorStyles = (variant: LinkVariants, hover: boolean) => {
  return `text-${variant}-default ${hover ? 'hover:underline' : 'underline'}`;
};

const getStyles = (variant: LinkVariants, hover: boolean) => {
  return `${getColorStyles(variant, hover)}`;
};

const Link: FC<LinkProps> = ({
  variant = 'primary',
  href,
  children,
  error,
  success,
  warning,
  hover = false,
  className,
  title,
  ...props
}) => {
  return (
    <a
      href={href}
      className={`${className} font-thin cursor-pointer text-lg ${getStyles(
        variant,
        hover
      )}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
