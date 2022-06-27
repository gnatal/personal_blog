import React from 'react';
import { cleanup, render } from '@testing-library/react';
import NewsLetterForm from '../NewsLetterForm';

afterAll(cleanup);

test('Disclaimer should be a paragraph', () => {
  const { container } = render(
    <NewsLetterForm />,
  );
  expect(container.getElementsByTagName('input').length).toBe(1);
});
