// Import external librairies
import React, { Component } from 'react';
import YouTube from 'react-youtube';

class VideoTraining extends Component {
    render() {
      // Defining recommended values for player
      const opts = {
        height: '315',
        width: '560',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
   
      // Returning the video player. Change the Youtube video id if you want to display another video.
      return (
        <YouTube
          videoId="A_BKOMTeLRg"
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
   
    _onReady(event) {
      // Access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }

  export default VideoTraining;