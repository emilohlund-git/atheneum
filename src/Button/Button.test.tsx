import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Button from './Button';

describe('Running Test for Button', () => {
  test('Check Button Variants', async () => {
    const { findByRole, rerender } = render(
      <Button variant={'primary'} outline size={'medium'}>
        Text
      </Button>
    );

    const buttonElement = await findByRole('button');

    expect(buttonElement.classList.contains('text-primary-default')).toBe(true);

    rerender(
      <Button variant={'secondary'} outline size={'medium'}>
        Text
      </Button>
    );

    expect(buttonElement.classList.contains('text-secondary-default')).toBe(
      true
    );

    rerender(<Button size={'small'}>Text</Button>);

    expect(buttonElement.classList.contains('text-lg')).toBe(true);

    rerender(<Button size="large">Text</Button>);

    expect(buttonElement.classList.contains('text-2xl')).toBe(true);

    fireEvent.mouseEnter(buttonElement);

    await waitFor(() => screen.getByTestId('overlay'));

    expect(screen.getByTestId('overlay')).toHaveStyle(
      'clip-path: inset(0% 0% 0% 0%);'
    );

    fireEvent.mouseLeave(buttonElement);

    await waitFor(() => screen.getByTestId('overlay'));

    expect(screen.getByTestId('overlay')).toHaveStyle(
      'clip-path: inset(100% 0% 0% 0%);'
    );
  });
});
