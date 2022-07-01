import React from 'react';
import { render } from '@testing-library/react';
import TextInput from '..';

describe('Testing input ', () => {
  test('It should render a input with type text', () => {
    const { container } = render(<TextInput label="Value 1" elementId="value1" {...{ type: 'text' }} />);
    const link = container.getElementsByTagName('input')[0];
    expect(link.getAttribute('type')).toBe('text');
  });
});
