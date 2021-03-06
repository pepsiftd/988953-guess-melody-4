import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class QuestionGenre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false],
    };
  }

  render() {
    const {question, onAnswer, renderPlayer} = this.props;
    const {answers} = question;
    const {answers: userAnswers} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {question.genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(question, this.state.answers);
          }}
        >
          {answers.map((answer, index) => {
            return (
              <div key={answer.src} className="track">
                {renderPlayer(answer.src, index)}
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${index + 1}`}
                    id={`answer-${index + 1}`}
                    onChange={(evt) => {
                      const value = evt.target.checked;
                      this.setState({
                        answers: [...userAnswers.slice(0, index), value, ...userAnswers.slice(index + 1)]
                      });
                    }}
                    checked={userAnswers[index]}
                  />
                  <label className="game__check" htmlFor={`answer-${index + 1}`}>Отметить</label>
                </div>
              </div>
            );
          })}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

QuestionGenre.propTypes = {
  question: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired}).isRequired,
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export {QuestionGenre};
