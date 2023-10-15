import { useState, useEffect } from "react";
import Image from "next/legacy/image";

export default function GameMusic() {
	const [isPlaying, setIsPlaying] = useState(true);
	const [audio, setAudio] = useState(null);
	const [volume, setVolume] = useState(0.5);
	const [isMuted, setIsMuted] = useState(false); // Added state for muting/unmuting

	useEffect(() => {
		const audioElement = new Audio("/music/song-1.mp3");
		audioElement.loop = true;
		audioElement.volume = volume;
		setAudio(audioElement);

		return () => {
			audioElement.pause();
		};
	}, [volume]);

	useEffect(() => {
		if (audio) {
			if (isPlaying && !isMuted) {
				audio.play();
			} else {
				audio.pause();
			}
		}
	}, [isPlaying, isMuted, audio]);

	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	const toggleMute = () => {
		setIsMuted(!isMuted);
		// Update the volume when muting/unmuting
		if (audio) {
			audio.volume = isMuted ? 0 : volume;
		}
	};

	return (
		<div className="speaker-container">
			<Image
				src={isPlaying ? "/music/speaker-off.png" : "/music/speaker.png"}
				alt={isPlaying ? "Speaker On" : "Speaker Off"}
				onClick={togglePlay}
				layout="fill"
				className="speaker-image"
			/>
			<button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
		</div>
	);
}
