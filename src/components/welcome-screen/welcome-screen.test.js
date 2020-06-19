import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

const mistakesCount = 3;
const welcomeButtonClickHandler = jest.fn();

it(`WelcomeScreen should render 3 mistakes`, () => {
  const tree = renderer.create(
      <WelcomeScreen
        mistakesCount={mistakesCount}
        welcomeButtonClickHandler={welcomeButtonClickHandler}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
