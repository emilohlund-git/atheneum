import { ReactNode } from 'react';
import { LinkVariants } from '../types/Variants';

export interface LinkProps {
  error?: boolean;
  warning?: boolean;
  success?: boolean;
  href?: string;
  variant?: LinkVariants;
  children?: ReactNode;
  hover?: boolean;
  className?: string;
  title?: string;
  id?: string;
  download?: string;
  rel?: string;
  style?: React.CSSProperties;
}
