import React from 'react';
import { render } from '@testing-library/react';

import Profile from '..';

describe('Testing the blogs page UI', () => {
  test('It should have a post header', () => {
    const { getByTestId } = render(<Profile />);
    const header = getByTestId('edit-link');
    expect(header.innerHTML).toBe('Edit');
  });
});
