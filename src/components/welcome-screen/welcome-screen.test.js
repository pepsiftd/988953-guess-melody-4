import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

const mistakesCount = 3;

it(`WelcomeScreen should render 3 mistakes`, () => {
  const tree = renderer.create(
      <WelcomeScreen
        mistakesCount={mistakesCount}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
