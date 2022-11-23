import React, { FC, useContext, useState } from 'react';
import { ButtonProps } from './Button.types';
import { ButtonVariants } from '../types/Variants';
import { ButtonSizes } from '../types/Sizes';
import { ThemeContext } from '../Context/ThemeContext/ThemeContext';

const getSizeStyles = (size: ButtonSizes) => {
  const large = 'py-2 px-6 text-lg';
  const medium = 'py-2 px-6 text-md';
  const small = 'py-2 px-6 text-sm';
  const tiny = 'py-2 px-6 text-xs';

  switch (size) {
    case 'tiny':
      return tiny;
    case 'small':
      return small;
    case 'medium':
      return medium;
    case 'large':
      return large;
  }
};

const getColorStyles = (variant: ButtonVariants, outline?: boolean) => {
  const VARIANTS = {
    primary: {
      outline: 'ring-[1px] ring-primary-default text-primary-default',
      default: 'bg-primary-default text-primary-content',
    },
    secondary: {
      outline: 'ring-[1px] ring-secondary-default text-secondary-default',
      default: 'bg-secondary-default text-secondary-content',
    },
    accent: {
      outline: 'ring-[1px] ring-accent-default text-accent-default',
      default: 'bg-accent-default text-accent-content',
    },
    light: {
      outline: 'ring-[1px] ring-light-default text-light-content',
      default: 'bg-light-default text-light-content',
    },
    dark: {
      outline: 'ring-[1px] ring-dark-default text-dark-default',
      default: 'bg-dark-default text-dark-content',
    },
    success: {
      outline: 'ring-[1px] ring-success-default text-success-default',
      default: 'bg-success-default text-success-content',
    },
    error: {
      outline: 'ring-[1px] ring-error-default text-error-default',
      default: 'bg-error-default text-error-content',
    },
  };

  if (outline) return VARIANTS[variant].outline;
  return VARIANTS[variant].default;
};

const getStyles = (
  variant: ButtonVariants,
  size: ButtonSizes,
  overlay: boolean
) => {
  return `${getColorStyles(variant, overlay)} ${getSizeStyles(size)}`;
};

const Button: FC<ButtonProps> & React.HTMLProps<HTMLButtonElement> = ({
  size = 'medium',
  variant = 'primary',
  disabled = false,
  loading = false,
  outline = false,
  children,
  onClick,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  const [hover, setHover] = useState(false);
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  } as { x: number; y: number });

  return (
    <button
      onMouseEnter={e => {
        setHover(true);
        setCoords({
          x: e.pageX - e.currentTarget.offsetLeft,
          y: e.pageY - e.currentTarget.offsetTop,
        });
      }}
      onMouseLeave={e => {
        setHover(false);
        setCoords({
          x: e.pageX - e.currentTarget.offsetLeft,
          y: e.pageY - e.currentTarget.offsetTop,
        });
      }}
      className={`${theme.join(
        ' '
      )} overflow-hidden relative w-fit h-fit transform transition-transform shadow-lg active:scale-95 ${getStyles(
        variant,
        size,
        outline
      )} group`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      <span
        className={`uppercase font-light tracking-wider flex justify-center items-center`}
      >
        {loading && (
          <svg
            className="z-40 absolute fill-primary-content inline w-4 h-4 text-primary-default animate-spin"
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
        <span
          className={`z-10 transition-colors ease-in-out ${loading &&
            'invisible'}`}
        >
          {children}
        </span>
      </span>
      {!loading && (
        <div
          data-testid="overlay"
          style={{
            position: 'absolute',
            top: coords.y,
            left: coords.x,
            transition: 'width 0.4s ease-in-out height 0.4s ease-in-out',
            transform: 'translate(-50%, -50%)',
          }}
          className={`bg-light-default bg-opacity-30 z-0 duration-700 ease-in-out rounded-full ${
            hover ? 'w-[700px] h-[700px]' : 'w-0 h-0'
          }`}
        />
      )}
    </button>
  );
};

export default Button;
