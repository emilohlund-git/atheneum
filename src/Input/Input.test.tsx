import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Running Test for Input', () => {
  test('Check Input Sizes', async () => {
    const { getByDisplayValue, rerender } = render(
      <Input value="Hej" onChange={() => {}} size="small" />
    );

    const inputElement = getByDisplayValue('Hej');

    expect(inputElement.classList.contains('text-lg')).toBe(true);

    rerender(<Input value="Hej" onChange={() => {}} size="medium" />);

    expect(inputElement.classList.contains('text-xl')).toBe(true);

    rerender(<Input value="Hej" onChange={() => {}} size="large" />);

    expect(inputElement.classList.contains('text-3xl')).toBe(true);
  });

  test('Check Input Variants', async () => {
    const { getByDisplayValue, rerender } = render(
      <Input variant="ghost" onChange={() => {}} value="Hej" />
    );

    const inputElement = getByDisplayValue('Hej');

    expect(inputElement.classList.contains('bg-opacity-0')).toBe(true);

    rerender(<Input variant="bordered" onChange={() => {}} value="Hej" />);

    expect(inputElement.classList.contains('border-light-focus')).toBe(true);

    rerender(<Input variant="primary" onChange={() => {}} value="Hej" />);

    expect(inputElement.classList.contains('bg-primary-content')).toBe(true);
  });

  test('Check Input Colors', async () => {
    const { getByDisplayValue, rerender } = render(
      <Input warning onChange={() => {}} value="Hej" />
    );

    const inputElement = getByDisplayValue('Hej');

    expect(inputElement.classList.contains('ring-accent-default')).toBe(true);

    rerender(<Input error onChange={() => {}} value="Hej" />);

    expect(inputElement.classList.contains('ring-error-default')).toBe(true);

    rerender(<Input success onChange={() => {}} value="Hej" />);

    expect(inputElement.classList.contains('ring-success-default')).toBe(true);
  });
});
