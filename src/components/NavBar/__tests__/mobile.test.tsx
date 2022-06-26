import React from 'react';
import renderer from 'react-test-renderer';
import NavBarMobile from '../mobile';

test('It should write an span in the nav header', () => {
  const component = renderer.create(
    <NavBarMobile />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
