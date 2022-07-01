import React from 'react';
import { render } from '@testing-library/react';
import Login from '..';

describe('Testing login header', () => {
  const singupUrl = '!#';

  test('It should have a link to sign up page', () => {
    const { container } = render(<Login />);
    const link = container.getElementsByTagName('a')[0];
    expect(link.getAttribute('href')).toBe(singupUrl);
  });
});
