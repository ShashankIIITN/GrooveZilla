import React, { createContext, useContext, useEffect } from 'react';
import { usePlaylist } from '../playlist/playlist';
import Controls from './controls';
import ProgressBar from './progressbar';
import SongInfo from './song-info';
import NewContext from '../context/NewContext';



const AudioPlayer = () => {

  const cnt = useContext(NewContext);
  const playlist = usePlaylist();
  const {
    playNextTrack,
    playPreviousTrack,
    playerState,
    togglePlayPause,
    toggleRepeat,
    toggleShuffle,
    setPlaybackPosition,
  } = cnt;



  const {
    repeat,
    playbackState,
    shuffle,
    currentTrackDuration,
    currentTrackPlaybackPosition,
    currentTrackMetadata,
  } = cnt;

  function setProgress(value: number) {
    if (currentTrackDuration !== null) {
      setPlaybackPosition((value / 100) * currentTrackDuration);
    }
  }

  function computeProgress(): number {
    const noProgress =
      currentTrackDuration === null ||
      currentTrackPlaybackPosition === null ||
      currentTrackDuration === 0;
    if (noProgress) {
      return 0;
    } else {
      return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
    }
  }

  return (
    <>
      <div className="player flex flex-row items-center">
        <SongInfo
          title={currentTrackMetadata?.title}
          artist={currentTrackMetadata?.artist}
          coverArtSrc={currentTrackMetadata?.coverArtSrc}
        />
        <div className='flex flex-col items-center'>
          <span className="text-2xl drop-shadow-lg text-white">{currentTrackMetadata?.title}</span>
          <span className="text-base drop-shadow-lg text-grey">{currentTrackMetadata?.artist}</span>
          <ProgressBar
            rightLabel={formatTime(currentTrackDuration)}
            leftLabel={formatTime(currentTrackPlaybackPosition)}
            onChange={setProgress}
            progress={computeProgress()}
          />
          <Controls
            shuffle={shuffle}
            repeat={repeat}
            onShuffleClick={toggleShuffle}
            onRepeatClick={toggleRepeat}
            onPrevClick={playPreviousTrack}
            onNextClick={playNextTrack}
            onPlayClick={togglePlayPause}
            isPlaying={playbackState === 'PLAYING'}
          />
        </div>
        <div className="blurback" style={{ background: `url(${currentTrackMetadata?.coverArtSrc})` }}></div>
      </div>
    </>
  );
};

export default AudioPlayer;

function formatTime(timeInSeconds: number | null): string {
  if (timeInSeconds === null) return '';
  const numberOfMinutes = Math.floor(timeInSeconds / 60);
  const numberOfSeconds = Math.floor(timeInSeconds - numberOfMinutes * 60);
  const minutes = `${numberOfMinutes}`.padStart(2, '0');
  const seconds = `${numberOfSeconds}`.padStart(2, '0');
  return `${minutes}:${seconds}`;
}
