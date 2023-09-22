import React from "react";
import dynamic from "next/dynamic";

// Use dynamic import to load the p5.js sketch component only on the client-side
const DynamicSpaceShooter = dynamic(() => import("./DynamicSpaceShooter"), {
	ssr: false, // Disable server-side rendering for this component
});

const SpaceShooter = () => {
	return (
		<div id="sketch-container">
			{/* Load the p5.js sketch component on the client-side */}
			<DynamicSpaceShooter />
		</div>
	);
};

export default SpaceShooter;
