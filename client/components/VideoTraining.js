import React, { Component } from 'react';
import YouTube from 'react-youtube';

class VideoTraining extends Component {
    render() {
      const opts = {
        height: '315',
        width: '560',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
   
      return (
        <YouTube
          videoId="A_BKOMTeLRg"
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
   
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }

  export default VideoTraining;