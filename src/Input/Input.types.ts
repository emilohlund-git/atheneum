import { InputTypes } from '../types/InputTypes';
import { InputSizes } from '../types/Sizes';
import { InputVariants } from '../types/Variants';

export interface InputProps {
  error?: boolean;
  warning?: boolean;
  success?: boolean;
  placeholder?: string;
  variant?: InputVariants;
  size?: InputSizes;
  disabled?: boolean;
  type?: InputTypes;
  message?: string;
  required?: boolean;
  component?: string;
  id?: string;
  onInput?: any;
}
