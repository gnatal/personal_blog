import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from '..';

describe('Testing login header', () => {
  test('It should render a checkbox input', () => {
    const { container } = render(<Checkbox />);
    const link = container.getElementsByTagName('input')[0];
    expect(link.getAttribute('type')).toBe('checkbox');
  });
});
