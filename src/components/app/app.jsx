import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {GameType} from '@/const';

import {withAudioPlayer} from '@/hocs/with-audio-player/with-audio-player';

import {WelcomeScreen} from '@/components/welcome-screen/welcome-screen';
import {GameScreen} from '@/components/game-screen/game-screen';
import {QuestionArtist} from '@/components/question-artist/question-artist';
import {QuestionGenre} from '@/components/question-genre/question-genre';

const QuestionGenreWrapped = withAudioPlayer(QuestionGenre);
const QuestionArtistWrapped = withAudioPlayer(QuestionArtist);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };
  }

  _renderGameScreen(mistakesCount, questions, step) {
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
            <GameScreen
              type={question.type}
            >
              <QuestionArtistWrapped
                question={questions[1]}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1
                  }));
                }}
              />
            </GameScreen>
          );

        case GameType.GENRE:
          return (
            <GameScreen
              type={question.type}
            >
              <QuestionGenreWrapped
                question={questions[0]}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1
                  }));
                }}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {mistakesCount, questions} = this.props;
    const step = this.state.step;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen(mistakesCount, questions, step)}
          </Route>
          <Route exact path="/question-artist">
            <GameScreen
              type={GameType.ARTIST}
            >
              <QuestionArtistWrapped
                question={questions[1]}
                onAnswer={() => {}}
              />
            </GameScreen>
          </Route>
          <Route exact path="/question-genre">
            <GameScreen
              type={GameType.GENRE}
            >
              <QuestionGenreWrapped
                question={questions[0]}
                onAnswer={() => {}}
              />
            </GameScreen>
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

export {App};
