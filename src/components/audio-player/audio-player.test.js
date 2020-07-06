import React from 'react';
import renderer from 'react-test-renderer';

import {AudioPlayer} from './audio-player';

const src = `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`;

it(`AudioPlayer should render correctly`, () => {
  const tree = renderer.create(
      <AudioPlayer
        src={src}
        isPlaying={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
