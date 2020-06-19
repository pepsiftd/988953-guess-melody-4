import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const mistakesCount = 3;

it(`App should render 3 mistakes`, () => {
  const tree = renderer.create(
      <App
        mistakesCount={mistakesCount}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
