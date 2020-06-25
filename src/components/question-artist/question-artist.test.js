import React from 'react';
import renderer from 'react-test-renderer';
import QuestionArtist from './question-artist';

it(`QuestionArtist should render correctly`, () => {
  const tree = renderer.create(
      <QuestionArtist />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
