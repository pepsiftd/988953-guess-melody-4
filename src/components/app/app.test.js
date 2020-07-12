import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

const mistakesCount = 3;
const questions = [{
  type: `genre`,
  genre: `blues`,
  answers: [{
    src: `poweroverwhelming.ogg`,
    genre: `pop`,
  }, {
    src: `somethingfornothing.ogg`,
    genre: `blues`,
  }, {
    src: `battlecruiseroperational.ogg`,
    genre: `pop`,
  }, {
    src: `needalighter.ogg`,
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

describe(`App renders correctly`, () => {
  it(`App should Welcome screen`, () => {
    const tree = renderer.create(
        <App
          mistakesCount={mistakesCount}
          questions={questions}
          onAnswer={() => {}}
          onWelcomeButtonClick={() => {}}
          step={-1}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`App should render Genre Question`, () => {
    const tree = renderer.create(
        <App
          mistakesCount={mistakesCount}
          questions={questions}
          onAnswer={() => {}}
          onWelcomeButtonClick={() => {}}
          step={0}
        />
    ,{
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`App should render artist Question`, () => {
    const tree = renderer.create(
        <App
          mistakesCount={mistakesCount}
          questions={questions}
          onAnswer={() => {}}
          onWelcomeButtonClick={() => {}}
          step={1}
        />
    ,{
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
