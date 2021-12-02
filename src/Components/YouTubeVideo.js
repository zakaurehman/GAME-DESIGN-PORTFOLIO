import React from 'react';
import YouTube from 'react-youtube';

class YouTubeVideo extends React.Component {
  render () {
    const opts = {
      height: '590',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <div>
        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
        <div className="HeadingTextYouTubeVideo">Final Cut-scene - Banish</div>
        <div  className="DiscriptionTextYouTubeVideo">
          Final cut-scene in Banish, where the Player learns about the origin of the world, the three deities and the aftermath from Light and Dark’s eternal war. All the cut-scenes start from the top and move downward with parallax effects, accompanied with music and written script.
        </div>
        <div style={{marginTop:"12px",fontSize:"20px"}}>Voiced by Xanthe Huynh</div>
      </div>
    );
  }

  _onReady (event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo ();
  }
}
export default YouTubeVideo;
