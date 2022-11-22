import { MouseEventHandler } from 'react';
import { ButtonSizes } from '../types/Sizes';
import { ButtonVariants } from '../types/Variants';
export interface ButtonProps {
  text?: string;
  variant?: ButtonVariants;
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSizes;
  outline?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
