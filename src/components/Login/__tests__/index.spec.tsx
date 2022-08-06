import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Login from '..';

describe('Testing login header', () => {
  const singupUrl = '/signup';

  test('It should have a link to sign up page', () => {
    const { container } = render(<Login />);
    const link = container.getElementsByTagName('a')[0];
    expect(link.getAttribute('href')).toBe(singupUrl);
  });
});

describe('Testing login form', () => {
  const singupUrl = '/signup';

  test('It should fail due to password empty', async () => {
    const { container, getByTestId } = render(<Login />);
    const input1 = getByTestId('email-address');
    const input2 = getByTestId('password');
    const submit = getByTestId('submit');

    fireEvent.input(input1, {
      target: {
        value: 'someemail@gmail.com',
      },
    });

    fireEvent.input(input2, {
      target: {
        value: '',
      },
    });

    fireEvent.click(submit);

    await waitFor(() => {
      expect(getByTestId('password-error')).toBeInTheDocument();
    });
  });
});
