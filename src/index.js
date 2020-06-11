import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/components/app/app';

const Settings = {
  MISTAKES_COUNT: 3
};

const rootElement = document.querySelector(`#root`);

ReactDOM.render(
    <App
      mistakesCount={Settings.MISTAKES_COUNT}
    />,
    rootElement
);
