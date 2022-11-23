import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Running Test for Input', () => {
  test('Check Input Sizes', async () => {
    const { getByPlaceholderText, rerender } = render(
      <Input placeholder="Placeholder" size="small" />
    );

    const inputElement = getByPlaceholderText('Placeholder');

    expect(inputElement.classList.contains('text-sm')).toBe(true);

    rerender(<Input size="medium" />);

    expect(inputElement.classList.contains('text-md')).toBe(true);

    rerender(<Input size="large" />);

    expect(inputElement.classList.contains('text-lg')).toBe(true);
  });

  test('Check Input Variants', async () => {
    const { getByPlaceholderText, rerender } = render(
      <Input placeholder="Placeholder" variant="ghost" />
    );

    const inputElement = getByPlaceholderText('Placeholder');

    expect(inputElement.classList.contains('bg-opacity-0')).toBe(true);

    rerender(<Input variant="bordered" />);

    expect(inputElement.classList.contains('border-light-focus')).toBe(true);

    rerender(<Input variant="primary" />);

    expect(inputElement.classList.contains('bg-primary-content')).toBe(true);
  });

  test('Check Input Colors', async () => {
    const { getByPlaceholderText, rerender } = render(
      <Input placeholder="Placeholder" warning />
    );

    const inputElement = getByPlaceholderText('Placeholder');

    expect(inputElement.classList.contains('ring-accent-default')).toBe(true);

    rerender(<Input error />);

    expect(inputElement.classList.contains('ring-error-default')).toBe(true);

    rerender(<Input success />);

    expect(inputElement.classList.contains('ring-success-default')).toBe(true);
  });
});
