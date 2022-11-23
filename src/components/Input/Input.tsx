import React, { FC, useState, useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import PasswordEyeClosed from '../../icons/PasswordEyeClosed';
import PasswordEyeOpened from '../../icons/PasswordEyeOpened';
import { InputSizes } from '../../types/Sizes';
import { InputVariants } from '../../types/Variants';
import { InputProps } from './Input.types';

const getSizeStyles = (size: InputSizes) => {
  const small = 'py-2 px-4 text-sm';
  const medium = 'py-2 px-4 text-md';
  const large = 'py-2 px-4 text-lg';

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

const Input: FC<InputProps> & React.HTMLProps<HTMLInputElement> = ({
  warning = false,
  error = false,
  success = false,
  placeholder,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'text',
  message,
  required = false,
  onInput,
  id,
  ...props
}) => {
  const { state } = useContext(FormContext);
  const [show, setShow] = useState(false);

  const changeHandler = (event: any) => {
    onInput(placeholder!.toLowerCase(), event.target.value);
  };

  return (
    <div className="relative w-fit flex flex-col my-2">
      <input
        className={`${getStyles(
          variant,
          size,
          error,
          warning,
          success
        )} font-light transition-all w-fit h-fit ring-offset-1 focus:ring-2 focus:outline-none`}
        placeholder={placeholder}
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        disabled={disabled}
        required={required}
        onChange={changeHandler}
        value={state[placeholder?.toLowerCase() as keyof typeof state]}
        {...props}
      />
      {type === 'password' && (
        <div onClick={() => setShow(!show)}>
          {show ? <PasswordEyeOpened /> : <PasswordEyeClosed />}
        </div>
      )}
      {error && (
        <p className="text-error-default text-sm mt-2 break-words max-w-fit">
          {message}
        </p>
      )}
    </div>
  );
};

export default Input;
