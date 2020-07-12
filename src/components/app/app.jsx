import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {ActionCreator} from '@/reducer';
import {GameType} from '@/const';

import {withAudioPlayer} from '@/hocs/with-audio-player/with-audio-player';

import {WelcomeScreen} from '@/components/welcome-screen/welcome-screen';
import {GameScreen} from '@/components/game-screen/game-screen';
import {QuestionArtist} from '@/components/question-artist/question-artist';
import {QuestionGenre} from '@/components/question-genre/question-genre';

const QuestionGenreWrapped = withAudioPlayer(QuestionGenre);
const QuestionArtistWrapped = withAudioPlayer(QuestionArtist);

class App extends PureComponent {
  _renderGameScreen(mistakesCount, questions, step, onAnswer, onWelcomeButtonClick) {
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          mistakesCount={mistakesCount}
          welcomeButtonClickHandler={onWelcomeButtonClick}
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
                question={question}
                onAnswer={onAnswer}
              />
            </GameScreen>
          );

        case GameType.GENRE:
          return (
            <GameScreen
              type={question.type}
            >
              <QuestionGenreWrapped
                question={question}
                onAnswer={onAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {
      mistakesCount,
      questions,
      onAnswer,
      onWelcomeButtonClick,
      step,
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen(mistakesCount, questions, step, onAnswer, onWelcomeButtonClick)}
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
  step: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick: () => {
    dispatch(ActionCreator.incrementStep());
  },
  onAnswer: () => {
    dispatch(ActionCreator.incrementStep());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
