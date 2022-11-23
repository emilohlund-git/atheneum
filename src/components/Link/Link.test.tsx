import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Link from './Link';

describe('Running Test for Input', () => {
  test('Check Link Variants', async () => {
    const { getByText, rerender } = render(<Link variant="primary">Link</Link>);

    const linkElement = getByText('Link');

    expect(linkElement.classList.contains('text-primary-default')).toBe(true);

    rerender(<Link variant="secondary">Link</Link>);

    expect(linkElement.classList.contains('text-secondary-default')).toBe(true);

    rerender(<Link variant="accent">Link</Link>);

    expect(linkElement.classList.contains('text-accent-default')).toBe(true);

    rerender(<Link variant="dark">Link</Link>);

    expect(linkElement.classList.contains('text-dark-default')).toBe(true);

    rerender(<Link variant="light">Link</Link>);

    expect(linkElement.classList.contains('text-light-default')).toBe(true);

    rerender(<Link variant="error">Link</Link>);

    expect(linkElement.classList.contains('text-error-default')).toBe(true);

    rerender(<Link variant="success">Link</Link>);

    expect(linkElement.classList.contains('text-success-default')).toBe(true);

    rerender(
      <Link variant="success" hover>
        Link
      </Link>
    );

    expect(linkElement.classList.contains('underline')).toBe(false);

    fireEvent.mouseEnter(linkElement);

    await waitFor(() => screen.getByText('Link'));

    expect(screen.getByText('Link')).toHaveClass('hover:underline');
  });
});
