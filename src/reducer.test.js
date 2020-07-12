import {ActionType, ActionCreator, reducer} from './reducer';

const initialState = {
  step: -1,
  mistakesCount: 0,
};

it(`Reducer should return initialState when not given additional params`, () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

it(`Reducer should increment step correctly`, () => {
  expect(reducer({
    step: -1,
    mistakesCount: 0,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1
  })).toEqual({
    step: 0,
    mistakesCount: 0,
  });

  expect(reducer({
    step: 1,
    mistakesCount: 1,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 2
  })).toEqual({
    step: 3,
    mistakesCount: 1,
  });
});

it(`Reducer should increment mistakes correctly`, () => {
  expect(reducer({
    step: 0,
    mistakesCount: 0,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1
  })).toEqual({
    step: 0,
    mistakesCount: 1,
  });

  expect(reducer({
    step: 10,
    mistakesCount: 1,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 2
  })).toEqual({
    step: 10,
    mistakesCount: 3,
  });
});

it(`Action creators work correctly`, () => {
  expect(ActionCreator.incrementStep()).toEqual({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  });

  expect(ActionCreator.incrementMistakes()).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  });
});
