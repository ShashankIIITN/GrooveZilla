// DataContext.js
import React, { useState, useEffect } from "react";
import NewContext from "./NewContext"; // Make sure the path is correct
import { usePlaylist } from "../playlist/playlist";
import useAudioPlayer from "../audioplayer/hooks";

const DataContext = (props) => {
	const playlist = usePlaylist();

	const [CurrentQueue, setCurrentQueue] = useState([]);
	const [LikedQueue, setLikedQueue] = useState([]);

	const setterCurrentQueue = (arr) => {
		setCurrentQueue(arr);
	};

	const setterLikedQueue = (arr) => {
		setLikedQueue([...arr]);
	};
	const {
		playNextTrack,
		playPreviousTrack,
		playerState,
		togglePlayPause,
		toggleRepeat,
		toggleShuffle,
		setPlaybackPosition,
		playTrack,
	} = useAudioPlayer(playlist.playlist);

	const {
		repeat,
		playbackState,
		shuffle,
		currentTrackDuration,
		currentTrackPlaybackPosition,
		currentTrackMetadata,
	} = playerState;

	return (
		<NewContext.Provider
			value={{
				playNextTrack: playNextTrack,
				playPreviousTrack: playPreviousTrack,
				playerState: playerState,
				togglePlayPause: togglePlayPause,
				toggleRepeat: toggleRepeat,
				toggleShuffle: toggleShuffle,
				setPlaybackPosition: setPlaybackPosition,
				playTrack: playTrack,
				repeat: repeat,
				playbackState: playbackState,
				shuffle: shuffle,
				currentTrackDuration: currentTrackDuration,
				currentTrackPlaybackPosition: currentTrackPlaybackPosition,
				currentTrackMetadata: currentTrackMetadata,
				CurrentQueue: CurrentQueue,
				LikedQueue: LikedQueue,
				setterCurrentQueue: setterCurrentQueue,
				setterLikedQueue: setterLikedQueue,
				setLikedQueue: setLikedQueue,
			}}
		>
			{props.children}
		</NewContext.Provider>
	);
};

export default DataContext;
