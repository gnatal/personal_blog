import React from 'react';
import renderer from 'react-test-renderer';
import HelloYou from '../Hello';

test('It should craete a snapshot', () => {
  const component = renderer.create(<HelloYou name="pedro" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
