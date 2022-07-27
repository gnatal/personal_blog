import React from 'react';
import { render } from '@testing-library/react';
import Signup from '..';

describe('Testing login header', () => {
  const method = 'POST';

  test('It should have a link to sign up page', () => {
    const { container } = render(<Signup />);
    const link = container.getElementsByTagName('form')[0];
    expect(link.getAttribute('method')).toBe(method);
  });
});
