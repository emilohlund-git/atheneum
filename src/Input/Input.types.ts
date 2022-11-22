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
}
