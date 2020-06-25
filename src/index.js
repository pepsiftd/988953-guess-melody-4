import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/components/app/app';
import questions from '@/mock/questions';

const Settings = {
  MISTAKES_COUNT: 3
};

const rootElement = document.querySelector(`#root`);

ReactDOM.render(
    <App
      mistakesCount={Settings.MISTAKES_COUNT}
      questions={questions}
    />,
    rootElement
);
