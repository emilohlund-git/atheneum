import React, { FC } from 'react';
import { InputSizes } from '../types/Sizes';
import { InputVariants } from '../types/Variants';
import { InputProps } from './Input.types';

const getSizeStyles = (size: InputSizes) => {
  const small = 'py-2 px-4 text-lg';
  const medium = 'py-3 px-5 text-xl';
  const large = 'py-4 px-5 text-2xl';

  switch (size) {
    case 'small':
      return small;
    case 'medium':
      return medium;
    case 'large':
      return large;
  }
};

const getColorStyles = (
  variant: InputVariants,
  error: boolean,
  warning: boolean,
  success: boolean
) => {
  if (error) return 'ring-[1px] ring-error-default text-error-default';
  if (success) return 'ring-[1px] ring-success-default text-success-default';
  if (warning) return 'ring-[1px] ring-accent-default text-accent-default';
  switch (variant) {
    case 'ghost':
      return 'bg-opacity-0';
    case 'bordered':
      return 'border-[1px] border-light-focus';
    case 'primary':
      return 'bg-primary-content';
  }
};

const getStyles = (
  variant: InputVariants,
  size: InputSizes,
  error: boolean,
  warning: boolean,
  success: boolean
) => {
  return `${getColorStyles(variant, error, warning, success)} ${getSizeStyles(
    size
  )}`;
};

const Input: FC<InputProps> = ({
  warning = false,
  error = false,
  success = false,
  value,
  onChange,
  placeholder,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  ...props
}) => {
  return (
    <input
      className={`${getStyles(
        variant,
        size,
        error,
        warning,
        success
      )} font-light transition-all w-fit h-fit rounded-lg ring-offset-1 focus:ring-2 focus:outline-none`}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;
