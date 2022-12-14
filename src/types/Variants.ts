export const ButtonVariantValues = [
  'primary',
  'secondary',
  'accent',
  'light',
  'dark',
  'success',
  'error',
] as const;
export type ButtonVariants = typeof ButtonVariantValues[number];

export const InputVariantValues = ['ghost', 'bordered', 'primary'] as const;
export type InputVariants = typeof InputVariantValues[number];

export const LinkVariantValues = [
  'primary',
  'secondary',
  'accent',
  'light',
  'dark',
  'success',
  'error',
  'warning',
] as const;
export type LinkVariants = typeof LinkVariantValues[number];

const SubVariantValues = [
  'outline',
  'default',
] as const;
export type SubVariants = typeof SubVariantValues[number];
