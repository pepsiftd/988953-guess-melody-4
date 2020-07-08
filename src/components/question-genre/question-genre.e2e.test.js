import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {QuestionGenre} from './question-genre';

Enzyme.configure({
  adapter: new Adapter()
});

const question = {
  type: `genre`,
  genre: `bossanova`,
  answers: [{
    src: `src1`,
    genre: `christian`,
  }, {
    src: `src2`,
    genre: `folk`,
  }, {
    src: `src3`,
    genre: `grunge`,
  }, {
    src: `src4`,
    genre: `bossanova`,
  }],
};

it(`Genre question form should not be sent`, () => {
  const onAnswer = jest.fn();
  const screen = shallow(
      <QuestionGenre
        question={question}
        onAnswer={onAnswer}
        renderPlayer={() => {}}
      />
  );

  const form = screen.find(`form`);
  const formSendPrevention = jest.fn();

  form.simulate(`submit`, {preventDefault: formSendPrevention});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`Genre question onAnswer should return right data`, () => {
  const userAnswer = [false, false, true, false];
  const onAnswer = jest.fn((...args) => [...args]);
  const screen = shallow(
      <QuestionGenre
        question={question}
        onAnswer={onAnswer}
        renderPlayer={() => {}}
      />
  );

  const form = screen.find(`form`);
  const inputThree = screen.find(`input`).at(2);

  inputThree.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

  expect(
      screen.find(`input`).map((it) => it.prop(`checked`))
  ).toEqual(userAnswer);
});
