import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Button from './Button';

describe('Running Test for Button', () => {
  test('Check Button Variants', async () => {
    const { findByRole, rerender } = render(
      <Button variant={'primary'} subvariant={'outline'} size={'medium'}>
        Text
      </Button>
    );

    const buttonElement = await findByRole('button');

    expect(buttonElement.classList.contains('text-primary-default')).toBe(true);

    rerender(
      <Button variant={'secondary'} subvariant={'outline'} size={'medium'}>
        Text
      </Button>
    );

    expect(buttonElement.classList.contains('text-secondary-default')).toBe(
      true
    );

    rerender(<Button size={'small'}>Text</Button>);

    expect(buttonElement.classList.contains('text-sm')).toBe(true);

    rerender(<Button size="large">Text</Button>);

    expect(buttonElement.classList.contains('text-lg')).toBe(true);

    fireEvent.mouseEnter(buttonElement);

    await waitFor(() => screen.getByTestId('overlay'));

    expect(screen.getByTestId('overlay')).toHaveClass('w-[700px]');

    fireEvent.mouseLeave(buttonElement);

    await waitFor(() => screen.getByTestId('overlay'));

    expect(screen.getByTestId('overlay')).toHaveClass('w-0');
  });
});
