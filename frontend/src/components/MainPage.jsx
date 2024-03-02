import React, { useContext, useEffect } from "react";
import "../css/MainPage.css";
import AudioPlayer from "./audioplayer.tsx";
import Currentqueue from "./Currentqueue.jsx";
import LikedQueue from "./LikedQueue.jsx";
import TabMenu from "./minorcmp/Tabmenu.jsx";
import NewContext from "../context/NewContext.jsx";


function MainPage() {

	const cnt = useContext(NewContext)

	useEffect(()=>{
		console.log(cnt.LikedQueue)
	}, [cnt.LikedQueue])

	const tabs = [
		{ label: "Current Queue", content: <Currentqueue list = {cnt.CurrentQueue}/> },
		{ label: "Liked Queue", content: <LikedQueue list = {cnt.LikedQueue}/> },
	];
	return (
		<div className="mainpage">
			<div className="main_upper">
				<AudioPlayer  />
				{/* <div className="blurback"></div> */}
			</div>
      <div className="hline"></div>
			<div className="main_lower">
				<TabMenu tabs={tabs} defaultTab={0} />
			</div>
		</div>
	);
}

export default MainPage;
