import React, {PureComponent} from 'react';
import {AudioPlayer} from '@/components/audio-player/audio-player';

const NO_ACTIVE_PLAYER = -1;

const withAudioPlayer = (Component) => {
  class WithAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };
    }

    render() {
      const {activePlayerId} = this.state;
      return (
        <Component
          {...this.props}
          renderPlayer={(src, id) => {
            return (
              <AudioPlayer
                src={src}
                isPlaying={activePlayerId === id}
                onPlayButtonClick={() => this.setState({
                  activePlayerId: activePlayerId === id ? NO_ACTIVE_PLAYER : id
                })}
              />
            );
          }}
        />
      );
    }
  }

  WithAudioPlayer.propTypes = {

  };

  return WithAudioPlayer;
};

export {withAudioPlayer};
