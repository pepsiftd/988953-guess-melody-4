const extend = (oldState, newState) => {
  return Object.assign({}, oldState, newState);
};

const initialState = {
  step: -1,
  mistakesCount: 0,
};

const ActionType = {
  INCREMENT_STEP: `INCREMENT_STEP`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  RESET_STEP: `RESET_STEP`,
  RESET_MISTAKES: `RESET_MISTAKES`,
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),
  incrementMistakes: () => ({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  }),
  resetStep: () => ({
    type: ActionType.RESET_STEP,
  }),
  resetMistakes: () => ({
    type: ActionType.RESET_MISTAKES,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      return extend(state, {
        step: state.step + action.payload
      });
    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakesCount: state.mistakesCount + action.payload
      });
  }

  return state;
};

export {ActionType, ActionCreator, reducer};
