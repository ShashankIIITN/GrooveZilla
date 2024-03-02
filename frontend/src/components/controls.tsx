import React from 'react';
import "../css/AudioControls.css";
import playButtonIcon from '../assets/ic_play.svg';
import pauseButtonIcon from '../assets/ic_pause.svg';
import nextButtonIcon from '../assets/ic_next.svg';
import prevButtonIcon from '../assets/ic_prev.svg';
import shuffleButtonIcon from '../assets/ic_shuffle.svg';
import shuffleButtonDisabledIcon from '../assets/ic_shuffle_disabled.svg';
import repeatButtonIcon from '../assets/ic_repeat.svg';
import repeatButtonDisabledIcon from '../assets/ic_repeat_disabled.svg';

type ControlsProps = {
  onPlayClick: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  onRepeatClick: () => void;
  onShuffleClick: () => void;
  isPlaying: boolean;
  repeat: boolean;
  shuffle: boolean;
};

const Controls = ({
  onPlayClick,
  isPlaying,
  onPrevClick,
  onNextClick,
  repeat,
  onRepeatClick,
  shuffle,
  onShuffleClick,
}: ControlsProps) => {
  return (
    <div className="controls flex flex-row mt-4">
      <ImageButton
        src={!shuffle ? shuffleButtonIcon : shuffleButtonDisabledIcon}
        onClick={onShuffleClick}
      />
      <ImageButton src={prevButtonIcon} onClick={onPrevClick} />
      <ImageButton
        className="mr-2 ml-2"
        src={!isPlaying ? pauseButtonIcon : playButtonIcon}
        onClick={onPlayClick}
      />
      <ImageButton src={nextButtonIcon} onClick={onNextClick} />
      <ImageButton
        src={!repeat ? repeatButtonIcon : repeatButtonDisabledIcon}
        onClick={onRepeatClick}
      />
    </div>
  );
};

export default Controls;

type ImageButtonProps = {
  src: string;
  onClick: () => void;
  className?: string;
};

const ImageButton = ({ onClick, src, className }: ImageButtonProps) => {
  const buttonSize = 65;
  return (
    <button onClick={onClick}>
      <img
        src={src}
        width={buttonSize}
        height={buttonSize}
        className={`drop-shadow-lg  ${className ?? ''}`}
      />
    </button>
  );
};
