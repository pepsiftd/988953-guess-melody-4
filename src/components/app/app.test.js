import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const mistakesCount = 3;
const questions = [{
  type: `genre`,
  genre: `blues`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `pop`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `pop`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
},
{
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `http://placehold.it/134x134`,
    artist: `John Snow`,
  }, {
    picture: `http://placehold.it/134x134`,
    artist: `Jack Daniels`,
  }, {
    picture: `http://placehold.it/134x134`,
    artist: `Jim Beam`,
  }],
}];

it(`App should render 3 mistakes`, () => {
  const tree = renderer.create(
      <App
        mistakesCount={mistakesCount}
        questions={questions}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
