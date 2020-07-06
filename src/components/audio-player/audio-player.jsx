import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';

const PlaybackButton = {
  PLAY: `play`,
  PAUSE: `pause`
};

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {src} = this.props;

    this._audio = new Audio(src);

    this._audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    this._audio.onplay = () => this.setState({
      isPlaying: true,
    });

    this._audio.onpause = () => this.setState({
      isPlaying: false,
    });

    this._audio.ontimeupdate = () => this.setState({
      progress: this._audio.currentTime
    });
  }

  componentWillUnmount() {
    this._audio.oncanplaythrough = null;
    this._audio.onplay = null;
    this._audio.onpause = null;
    this._audio.ontimeupdate = null;
    this._audio.src = ``;
    this._audio = null;
  }

  render() {
    const {isPlaying, isLoading} = this.state;

    return (
      <Fragment>
        <button
          className={`track__button track__button--${isPlaying ? PlaybackButton.PAUSE : PlaybackButton.PLAY}`}
          type="button"
          disabled={isLoading}
          onClick={() => this.setState({
            isPlaying: !this.state.isPlaying
          })}
        />
        <div className="track__status">
          <audio />
        </div>
      </Fragment>
    );
  }

  componentDidUpdate() {
    if (this.state.isPlaying) {
      this._audio.play();
    } else {
      this._audio.pause();
    }
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export {AudioPlayer};
