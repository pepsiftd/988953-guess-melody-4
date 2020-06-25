import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const mistakesCount = 3;
const questions = [{}, {}];

it(`App should render 3 mistakes`, () => {
  const tree = renderer.create(
      <App
        mistakesCount={mistakesCount}
        questions={questions}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
