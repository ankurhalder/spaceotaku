// components/Player.js
import React from "react";

const Player = ({ x, y }) => {
	return (
		<div
			style={{
				position: "absolute",
				left: x + "px",
				top: y + "px",
				width: "50px",
				height: "50px",
				background: "blue",
			}}
		/>
	);
};

export default Player;
