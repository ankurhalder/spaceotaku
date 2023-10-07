import React from "react";

const Bullet = ({ x, y }) => {
	return (
		<div
			style={{
				position: "absolute",
				left: x + "px",
				top: y + "px",
				width: "10px",
				height: "10px",
				background: "yellow",
			}}
		/>
	);
};

export default Bullet;
