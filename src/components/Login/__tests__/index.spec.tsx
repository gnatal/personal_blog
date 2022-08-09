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
  test('It should fail due to email empty', async () => {
    const { getByTestId } = render(<Login />);
    const input1 = getByTestId('email');
    const input2 = getByTestId('password');
    const submit = getByTestId('submit');

    fireEvent.input(input1, {
      target: {
        value: '',
      },
    });

    fireEvent.input(input2, {
      target: {
        value: 'asdasdasd',
      },
    });

    fireEvent.click(submit);

    await waitFor(() => {
      expect(getByTestId('email-error')).toBeInTheDocument();
    });
  });

  test('It should fail due to password empty', async () => {
    const { getByTestId } = render(<Login />);
    const input1 = getByTestId('email');
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

  test('It should fail due to password not big enough', async () => {
    const { getByTestId } = render(<Login />);
    const input1 = getByTestId('email');
    const input2 = getByTestId('password');
    const submit = getByTestId('submit');

    fireEvent.input(input1, {
      target: {
        value: 'someemail@gmail.com',
      },
    });

    fireEvent.input(input2, {
      target: {
        value: 'asd',
      },
    });

    fireEvent.click(submit);

    await waitFor(() => {
      expect(getByTestId('password-error')).toBeInTheDocument();
    });
  });
});
