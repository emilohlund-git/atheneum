import React, { FC, useState } from 'react';
import { ButtonProps } from './Button.types';
import { ButtonVariants } from '../types/Variants';
import { ButtonSizes } from '../types/Sizes';

const getSizeStyles = (size: ButtonSizes) => {
  const small = 'py-2 px-6 text-lg';
  const medium = 'py-4 px-8 text-xl';
  const large = 'py-6 px-12 text-2xl';

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
  variant: ButtonVariants,
  overlay: boolean,
  loading?: boolean,
  outline?: boolean
) => {
  const VARIANTS = {
    primary: {
      outline: 'bg-primary-content border-primary-default text-primary-default',
      overlay: 'bg-primary-default text-primary-content',
      loading: 'bg-primary-default text-primary-default',
      default: 'border-primary-default bg-primary-default text-primary-content',
    },
    secondary: {
      outline:
        'bg-secondary-content border-secondary-default text-secondary-default',
      overlay: 'bg-secondary-default text-secondary-content',
      loading: 'bg-secondary-default text-secondary-default',
      default:
        'border-secondary-default bg-secondary-default text-secondary-content',
    },
    accent: {
      outline: 'bg-primary-content border-accent-default text-accent-default',
      overlay: 'bg-accent-default text-accent-content',
      loading: 'bg-accent-default text-accent-default',
      default: 'border-accent-default bg-accent-default text-accent-content',
    },
    light: {
      outline: 'bg-light-default border-light-default text-light-content',
      overlay: 'bg-light-default text-light-content',
      loading: 'bg-light-default text-light-default',
      default: 'border-light-default bg-light-default text-light-content',
    },
    dark: {
      outline: 'bg-primary-content border-dark-default text-dark-default',
      overlay: 'bg-dark-default text-dark-content',
      loading: 'bg-dark-default text-dark-default',
      default: 'border-dark-default bg-dark-default text-dark-content',
    },
    success: {
      outline: 'bg-primary-content border-success-default text-success-default',
      overlay: 'bg-success-default text-success-content',
      loading: 'bg-success-default text-success-default',
      default: 'border-success-default bg-success-default text-success-content',
    },
    error: {
      outline: 'bg-primary-content border-error-default text-error-default',
      overlay: 'bg-error-default text-error-content',
      loading: 'bg-error-default text-error-default',
      default: 'border-error-default bg-error-default text-error-content',
    },
  };

  if (!outline && overlay) return VARIANTS[variant].outline;

  if (outline && overlay) return VARIANTS[variant].overlay;

  if (outline) return VARIANTS[variant].outline;

  if (overlay) return VARIANTS[variant].overlay;

  if (loading) return VARIANTS[variant].loading;

  return VARIANTS[variant].default;
};

const getStyles = (
  variant: ButtonVariants,
  size: ButtonSizes,
  overlay: boolean,
  loading?: boolean,
  outline?: boolean
) => {
  return `${getColorStyles(variant, overlay, loading, outline)} ${getSizeStyles(
    size
  )}`;
};

const Button: FC<ButtonProps> = ({
  size = 'medium',
  variant = 'primary',
  disabled = false,
  text,
  loading = false,
  outline = false,
  onClick,
  ...props
}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative w-fit h-fit transform transition-transform shadow-lg active:scale-95 border-2 ${getStyles(
        variant,
        size,
        false,
        loading,
        outline
      )} group`}
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      <span
        className={`uppercase font-light tracking-wider flex justify-center`}
      >
        {loading && (
          <svg
            className="z-40 absolute fill-primary-content inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        )}
        <span className={`${loading && 'invisible'}`}>{text}</span>
      </span>
      {!loading && (
        <div
          data-testid="overlay"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transition: 'all .2s ease-out',
            clipPath: hover ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
          }}
          className={`${getStyles(variant, size, true, loading, outline)}`}
        >
          <span className={`uppercase font-light tracking-wider`}>
            {!loading && text}
          </span>
        </div>
      )}
    </button>
  );
};

export default Button;
