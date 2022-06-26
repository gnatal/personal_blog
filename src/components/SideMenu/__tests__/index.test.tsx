import React from 'react';
import renderer from 'react-test-renderer';
import SideMenu from '..';

test('It should show open and close the menu', () => {
  const component = renderer.create(
    <SideMenu isOpen />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('It should show open and close the menu', () => {
  const component = renderer.create(
    <SideMenu isOpen={false} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
