import React from 'react';
import YouTube from 'react-youtube';

const App = () => {
  const apiKey = 'AIzaSyBEX3oKWVQ9Ne6HTa_Dd59Rw9BYBKhpnto';
  const videoId = 'MZwoTIeAre0';

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  const onReady = (event) => {
    console.log(`Player ready! Video duration: ${event.target.getDuration()}s`);
  };

  const onStateChange = (event) => {
    switch (event.data) {
      case YouTube.PlayerState.PLAYING:
        console.log('Video is playing');
        break;
      case YouTube.PlayerState.PAUSED:
        console.log('Video is paused');
        break;
      case YouTube.PlayerState.ENDED:
        console.log('Video has ended');
        break;
      case YouTube.PlayerState.BUFFERING:
        console.log('Video is buffering');
        break;
      case YouTube.PlayerState.CUED:
        console.log('Video is cued');
        break;
      default:
        break;
    }
  };

  return (
    <div>

   
    <h1 className='flex justify-center items-center rounded-3xl font-extrabold font-serif'>Youtube Video Player</h1>
    <div className="App min-h-screen flex justify-center items-center rounded-3xl">
    
      <YouTube videoId={videoId} opts={opts} onReady={onReady} onStateChange={onStateChange} />
    </div>
    </div>
  );
};

export default App;
