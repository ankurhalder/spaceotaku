import { useState, useEffect } from "react";
import Image from "next/image";

export default function GameMusic() {
	const [isPlaying, setIsPlaying] = useState(true); // Initially, music is playing
	const [audio, setAudio] = useState(null); // Initialize audio as null

	useEffect(() => {
		// Load Audio object on the client-side
		setAudio(new Audio("/music/song-1.mp3"));
	}, []);

	useEffect(() => {
		if (audio) {
			if (isPlaying) {
				audio.play();
			} else {
				audio.pause();
			}

			return () => {
				audio.pause();
				audio.currentTime = 0;
			};
		}
	}, [isPlaying, audio]);

	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div>
			<Image
				src={isPlaying ? "/music/speaker.png" : "/music/speaker.png"}
				alt={isPlaying ? "Speaker On" : "Speaker Off"}
				onClick={togglePlay}
				width={32}
				height={32}
				style={{ cursor: "pointer" }}
			/>
		</div>
	);
}
