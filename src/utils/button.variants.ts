import { SubVariants } from "../types/Variants";

const ButtonClasses = {
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

const LoadingClasses = {
  primary: {
    outline: 'fill-primary-default text-primary-content',
    default: 'fill-primary-content text-primary-default',
  },
  secondary: {
    outline: 'fill-secondary-default text-secondary-content',
    default: 'fill-secondary-content text-secondary-default',
  },
  accent: {
    outline: 'fill-accent-default text-accent-content',
    default: 'fill-accent-content text-accent-default',
  },
  light: {
    outline: 'fill-light-default text-light-content',
    default: 'fill-light-content text-light-default',
  },
  dark: {
    outline: 'fill-dark-default text-dark-content',
    default: 'fill-dark-content text-dark-default',
  },
  success: {
    outline: 'fill-success-default text-success-content',
    default: 'fill-success-content text-success-default',
  },
  error: {
    outline: 'fill-error-default text-error-content',
    default: 'fill-error-content text-error-default',
  },
}



export const buildButtonStyle = (variant: keyof typeof ButtonClasses, subvariant: SubVariants) => {
  return ButtonClasses[variant][subvariant];
}

export const buildLoadingStyle = (variant: keyof typeof LoadingClasses, subvariant: SubVariants) => {
  return LoadingClasses[variant][subvariant];
}