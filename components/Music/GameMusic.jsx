import { useEffect } from "react";

export default function GameMusic() {
	useEffect(() => {
		const backgroundMusic = new Audio("/music/song-1.mp3");
		backgroundMusic.loop = true;
		backgroundMusic.volume = 1;
		backgroundMusic.play();

		return () => {
			backgroundMusic.pause();
			backgroundMusic.currentTime = 0;
		};
	}, []);

	return null;
}
