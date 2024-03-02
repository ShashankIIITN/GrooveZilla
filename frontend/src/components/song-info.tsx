import React from "react";
type SongInfoProps = {
  title?: string;
  artist?: string;
  coverArtSrc?: string;
};

const SongInfo = ({ title, artist, coverArtSrc }: SongInfoProps) => {
  return (
    <div className="songinfo">
      <img
        className="songinfo_img"
        src={coverArtSrc}
      />

    </div>
  );
};

export default SongInfo;
