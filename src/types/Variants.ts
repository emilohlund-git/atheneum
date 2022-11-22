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
