import { InputTypes } from '../types/InputTypes';
import { InputSizes } from '../types/Sizes';
import { InputVariants } from '../types/Variants';

export interface InputProps {
  error?: boolean;
  warning?: boolean;
  success?: boolean;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  variant?: InputVariants;
  size?: InputSizes;
  disabled?: boolean;
  type?: InputTypes;
  message?: string;
  required?: boolean;
}
