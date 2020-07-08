import React from 'react';
import PropTypes from 'prop-types';

const AUDIO_PLAYER_ID = 0;

const QuestionArtist = ({question, onAnswer, renderPlayer}) => {
  const {answers, song} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(song.src, AUDIO_PLAYER_ID)}
        </div>
      </div>

      <form className="game__artist">
        {answers.map((answer, index) => {
          return (
            <div key={answer.artist} className="artist">
              <input
                className="artist__input visually-hidden"
                type="radio"
                name="answer"
                value={`artist-${index + 1}`}
                id={`answer-${index + 1}`}
                onChange={(evt) => {
                  evt.preventDefault();
                  onAnswer(question, answer);
                }}
              />
              <label className="artist__name" htmlFor={`answer-${index + 1}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                {answer.artist}
              </label>
            </div>
          );
        })}
      </form>
    </section>
  );
};

QuestionArtist.propTypes = {
  question: PropTypes.shape({
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })).isRequired
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export {QuestionArtist};
