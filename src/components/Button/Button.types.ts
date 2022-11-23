import { MouseEventHandler, ReactNode } from 'react';
import { ButtonSizes } from '../types/Sizes';
import { ButtonVariants, SubVariants } from '../types/Variants';
export interface ButtonProps {
  text?: string;
  variant?: ButtonVariants;
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSizes;
  subvariant?: SubVariants;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}
