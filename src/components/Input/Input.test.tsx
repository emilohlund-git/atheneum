import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Input from './Input';

describe('Running Test for Input', () => {
  const setup = (onInput: (id: string, value: string | number) => void) => {
    const utils = render(<Input onInput={onInput} placeholder="Placeholder" />);
    const input = utils.getByPlaceholderText('Placeholder');
    return {
      input,
      ...utils,
    };
  };

  test('Check Input Sizes', async () => {
    const { getByPlaceholderText, rerender } = render(
      <Input onInput={() => {}} placeholder="Placeholder" size="small" />
    );

    const inputElement = getByPlaceholderText('Placeholder');

    expect(inputElement.classList.contains('text-sm')).toBe(true);

    rerender(<Input onInput={() => {}} size="medium" />);

    expect(inputElement.classList.contains('text-md')).toBe(true);

    rerender(<Input onInput={() => {}} size="large" />);

    expect(inputElement.classList.contains('text-lg')).toBe(true);
  });

  test('Check Input Variants', async () => {
    const { getByPlaceholderText, rerender } = render(
      <Input onInput={() => {}} placeholder="Placeholder" variant="ghost" />
    );

    const inputElement = getByPlaceholderText('Placeholder');

    expect(inputElement.classList.contains('bg-opacity-0')).toBe(true);

    rerender(<Input onInput={() => {}} variant="bordered" />);

    expect(inputElement.classList.contains('border-light-focus')).toBe(true);

    rerender(<Input onInput={() => {}} variant="primary" />);

    expect(inputElement.classList.contains('bg-primary-content')).toBe(true);
  });

  test('Check Input Colors', async () => {
    const { getByPlaceholderText, rerender } = render(
      <Input onInput={() => {}} placeholder="Placeholder" warning />
    );

    const inputElement = getByPlaceholderText('Placeholder');

    expect(inputElement.classList.contains('ring-accent-default')).toBe(true);

    rerender(<Input onInput={() => {}} error />);

    expect(inputElement.classList.contains('ring-error-default')).toBe(true);

    rerender(<Input onInput={() => {}} success />);

    expect(inputElement.classList.contains('ring-success-default')).toBe(true);
  });

  test('Check Input onInput', async () => {
    const onInput = (id: string, value: string | number) => {
      console.log(id, value);
    };

    const logSpy = jest.spyOn(console, 'log');

    const { input } = setup(onInput);

    fireEvent.change(input, { target: { value: '23' } });
    expect(logSpy).toHaveBeenCalledWith('placeholder', '23');

    expect(input).toHaveValue('23');
  });
});
