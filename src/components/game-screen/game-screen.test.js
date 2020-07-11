import React from 'react';
import renderer from 'react-test-renderer';

import {GameScreen} from './game-screen';
import {GameType} from '@/const';

const children = <div className="children-component"/>;
describe(`GameScreen should render correctly`, () => {
  it(`with game type "artist"`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.ARTIST}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with game type "genre"`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.GENRE}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
