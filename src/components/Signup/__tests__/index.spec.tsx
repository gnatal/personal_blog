import React from 'react';
import { render } from '@testing-library/react';
import Signup from '..';

describe('Testing login header', () => {
  const method = 'submit';

  test('It should have a link to sign up page', () => {
    const { container } = render(<Signup />);
    const link = container.getElementsByTagName('button')[0];
    expect(link.getAttribute('type')).toBe(method);
  });
});
