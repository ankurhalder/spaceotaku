import { useState, useEffect } from "react";
import Image from "next/image";

export default function GameMusic() {
	const [isPlaying, setIsPlaying] = useState(true); // Initially, music is playing
	const [audio] = useState(new Audio("/music/song-1.mp3"));

	useEffect(() => {
		if (isPlaying) {
			audio.play();
		} else {
			audio.pause();
		}

		return () => {
			audio.pause();
			audio.currentTime = 0;
		};
	}, [isPlaying, audio]);

	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div>
			<Image
				src={isPlaying ? "/speaker.png" : "/speaker-off.png"}
				alt={isPlaying ? "Speaker On" : "Speaker Off"}
				onClick={togglePlay}
				width={32}
				height={32}
				style={{ cursor: "pointer" }}
			/>
		</div>
	);
}
