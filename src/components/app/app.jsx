import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomeScreen from '@/components/welcome-screen/welcome-screen';
import QuestionArtist from '@/components/question-artist/question-artist';
import QuestionGenre from '@/components/question-genre/question-genre';

const welcomeButtonClickHandler = () => {};

const App = ({mistakesCount}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            mistakesCount={mistakesCount}
            welcomeButtonClickHandler={welcomeButtonClickHandler}
          />
        </Route>
        <Route exact path="/question-artist">
          <QuestionArtist />
        </Route>
        <Route exact path="/question-genre">
          <QuestionGenre />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mistakesCount: PropTypes.number.isRequired,
};

export default App;
