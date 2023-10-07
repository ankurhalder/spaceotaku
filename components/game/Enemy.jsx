import React from "react";

const Enemy = ({ x, y }) => {
	return (
		<div
			style={{
				position: "absolute",
				left: x + "px",
				top: y + "px",
				width: "50px",
				height: "50px",
				background: "red",
			}}
		/>
	);
};

export default Enemy;
