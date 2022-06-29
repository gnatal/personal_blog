import React from 'react';
import { render } from '@testing-library/react';
import TextInput from '..';

describe('Testing login header', () => {
  const singupUrl = '!#';

  test('It should have a link to sign up page', () => {
    const { container } = render(<TextInput label="input" elementId="1234" />);
    const link = container.getElementsByTagName('a')[0];
    expect(link.getAttribute('href')).toBe(singupUrl);
  });
});
