import { describe, test, expect } from 'vitest';
import { HelloWorld } from './hello-world';
import { render, screen } from '@testing-library/react';

describe('HelloWorld', () => {
  test('Displays hello with the name of the prop value', () => {
    render(<HelloWorld name="World" />);

    expect(screen.getByText('Hello World')).toBeTruthy();
  });
});
