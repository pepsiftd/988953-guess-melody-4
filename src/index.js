import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from '@/components/app/app';
import {questions} from '@/mocks/questions';
import {reducer} from '@/reducer';

const Settings = {
  MISTAKES_COUNT: 3
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const rootElement = document.querySelector(`#root`);

ReactDOM.render(
    <Provider store={store}>
      <App
        mistakesCount={Settings.MISTAKES_COUNT}
        questions={questions}
      />
    </Provider>,
    rootElement
);
