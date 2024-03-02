import React, { useContext, useEffect, useState } from "react";
import "../css/LeftPage.css";
import icon from "../assets/Icon.png";
import { RiHome7Line, RiFolderMusicLine, RiMusic2Line } from "react-icons/ri";
import { IoIosTrendingUp } from "react-icons/io";
import { CiHeart, CiPause1, CiPlay1, CiStar, CiStop1 } from "react-icons/ci";
import { PiDot, PiMicrophoneStageLight } from "react-icons/pi";
import { FiMic, FiSettings } from "react-icons/fi";
import { PiRadioLight } from "react-icons/pi";
import { LiaDrumSolid } from "react-icons/lia";
import { GoDotFill, GoHeart, GoHeartFill } from "react-icons/go";
import iconAlbum from "../assets/iconAlbum.png";
import { usePlaylist } from "../playlist/playlist";
import NewContext from "../context/NewContext";
// import audioplayer, {Aplayer} from "./audioplayer"

function LeftPanel() {
	const cnt = useContext(NewContext);
	const playlist = usePlaylist();
	const [isplaying, setisplaying] = useState({
		name: "Guitar I",
		isplaying: true,
	});

	const toggleHeart = async (e, el) => {
		let arr = cnt.LikedQueue;
		e.stopPropagation();
		if (!arr.includes(el.metadata)) {
			await arr.unshift(el.metadata);
			// cnt.setterLikedQueue(el.metadata);
			cnt.setterLikedQueue(arr);
			// console.log("asd")
		} else {
			let newarr = arr.filter((e) => {
				return e.title !== el.metadata.title;
			});


			cnt.setterLikedQueue(newarr);
		}

	};

	const handleClickOnSong = (e, ind) => {
		const newSongTitle = playlist.getPlaylist()[ind]?.metadata;
		// console.log(playlist.getPlaylist()[ind]);
		// console.log(cnt)
		if (isplaying.name != newSongTitle.title) {
			cnt.playTrack(ind);
		} else {
			cnt.togglePlayPause();
		}
		setisplaying((prev) => {
			return {
				name: newSongTitle.title,
				isplaying: prev.name === newSongTitle.title ? !prev.isplaying : true,
			};
		});

		let arr = cnt.CurrentQueue.filter((el) => {
			return !(
				el.title === newSongTitle.title && el.artist === newSongTitle.artist
			);
		});

		arr.unshift(newSongTitle);
		cnt.setterCurrentQueue(arr);
	};

	return (
		<div className="leftpanel">
			<div className="leftpanel_heading">
				<img src={icon} alt="GrooveZillaLogo" />
				<h1>Groovezilla</h1>
			</div>
			<div className="leftpanel_content">
				<div className="hline"></div>
				<ul>
					{playlist.getPlaylist() &&
						playlist.getPlaylist().map((el, ind) => {
							return (
								<>
									<li
										key={ind}
										onClick={(e) => handleClickOnSong(e, ind)}
										className={`${
											isplaying.name === el.metadata.title ? "listActive" : ""
										}`}
									>
										{isplaying.isplaying &&
										isplaying.name == el.metadata.title ? (
											<CiPlay1 />
										) : (
											<CiPause1 />
										)}
										{el.metadata.title}
										{cnt.LikedQueue.includes(el.metadata) ? (
											<GoHeartFill
												onClick={(e) => toggleHeart(e, el)}
												name="heart"
												style={{
													fontSize: "1rem",
													marginLeft: "auto",
													marginRight: "10px",
												}}
											/>
										) : (
											<GoHeart
												onClick={(e) => toggleHeart(e, el)}
												name="heartfill"
												style={{
													fontSize: "1rem",
													marginLeft: "auto",
													marginRight: "10px",
												}}
											/>
										)}
									</li>
								</>
							);
						})}
				</ul>
				{/* <div className="hline "></div>
				<ul>
					<li className="listActive">
						<IoIosTrendingUp />
						Trending
					</li>
					<li>
						<CiStar />
						Popular
					</li>
					<li>
						<PiMicrophoneStageLight />
						Singer
					</li>
					<li>
						<LiaDrumSolid />
						Band
					</li>
					<li>
						<PiRadioLight />
						Radio
					</li>
					<li>
						<FiMic style={{ fontSize: "1.2rem" }} />
						Podcast
					</li>
				</ul>
				<div className="hline"></div>
				<ul>
					<li>
						<GoDotFill style={{ color: "red" }} />
						Love
					</li>
					<li>
						<GoDotFill style={{ color: "green" }} />
						Electro
					</li>
					<li>
						<GoDotFill style={{ color: "yellow" }} />
						Funk
					</li>
					<li>
						<GoDotFill style={{ color: "purple" }} />
						EDM
					</li>
					</ul>*/}
			</div>
			<p className="left_settings">
				<FiSettings />
				Settings
			</p>
		</div>
	);
}

export default LeftPanel;
