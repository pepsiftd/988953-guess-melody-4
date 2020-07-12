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

export {ActionType, reducer};
