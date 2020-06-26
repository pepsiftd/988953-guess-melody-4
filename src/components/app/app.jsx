import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomeScreen from '@/components/welcome-screen/welcome-screen';
import QuestionArtist from '@/components/question-artist/question-artist';
import QuestionGenre from '@/components/question-genre/question-genre';

const GameType = {
  ARTIST: `artist`,
  GENRE: `genre`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };
  }

  _renderGameScreen() {
    const {mistakesCount, questions} = this.props;
    const step = this.state.step;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          mistakesCount={mistakesCount}
          welcomeButtonClickHandler={() => {
            this.setState({
              step: 0
            });
          }}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <QuestionArtist
              question={questions[1]}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1
                }));
              }}
            />
          );

        case GameType.GENRE:
          return (
            <QuestionGenre
              question={questions[0]}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1
                }));
              }}
            />
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/question-artist">
            <QuestionArtist
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path="/question-genre">
            <QuestionGenre
              question={questions[0]}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  mistakesCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
