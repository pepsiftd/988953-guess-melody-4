import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomeScreen from '@/components/welcome-screen/welcome-screen';
import QuestionArtist from '@/components/question-artist/question-artist';
import QuestionGenre from '@/components/question-genre/question-genre';

const welcomeButtonClickHandler = () => {};

const App = ({mistakesCount, questions}) => {
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
          <QuestionArtist
            question={questions[1]}
          />
        </Route>
        <Route exact path="/question-genre">
          <QuestionGenre
            question={questions[0]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mistakesCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
