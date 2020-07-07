import React from 'react';
import renderer from 'react-test-renderer';
import {QuestionArtist} from './question-artist';

const question = {
  type: `artist`,
  song: {
    artist: `Банд'эрос`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `http://placehold.it/134x134`,
    artist: `Space`,
  }, {
    picture: `http://placehold.it/134x134`,
    artist: `Бахыт компот`,
  }, {
    picture: `http://placehold.it/134x134`,
    artist: `Stereophonics`,
  }],
};

it(`QuestionArtist should render correctly`, () => {
  const tree = renderer.create(
      <QuestionArtist
        question={question}
        onAnswer={() => {}}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
