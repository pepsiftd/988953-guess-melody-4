import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionArtist from './question-artist';

Enzyme.configure({
  adapter: new Adapter()
});

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

const mockEvent = {
  preventDefault() {}
};

it(`QuestionArtist's onAnswer returns right data`, () => {
  const userAnswer = {
    picture: `http://placehold.it/134x134`,
    artist: `Space`,
  };

  const onAnswer = jest.fn();

  const screen = shallow(
      <QuestionArtist
        question={question}
        onAnswer={onAnswer}
      />
  );

  const answerInputs = screen.find(`input`);
  answerInputs.at(0).simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
