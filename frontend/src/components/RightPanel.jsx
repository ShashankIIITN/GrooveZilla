import React from "react";
import "../css/RightPage.css";
import Button from "./minorcmp/Button";
import { GoUnfold } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import profImg from "../assets/profileImage.png";

function RightPanel() {
	return (
		<div className="rightpanel">
			<div className="right_top">
				<Button text="Download Now" icon={<FiDownload />} iconPosition="left" />
				<div className="profmask">
					<img className="profImage" src={profImg} alt="" srcset="" />
				</div>
			</div>
		</div>
	);
}

export default RightPanel;
