import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
export default function ChatComponent() {
	const [open, setOpen] = useState(false);
	const messagesContentRef = useRef(null);
	const [inputValue, setInputValue] = useState("");
	const [isListening, setIsListening] = useState(false);
	const recognition = useRef(null);
	const [audioData, setAudioData] = useState(null);
	const [recoding, setRecording] = useState(false);
	useEffect(() => {
		try {
			recognition.current = new (window.SpeechRecognition ||
				window.webkitSpeechRecognition)();
		} catch (e) {
			console.error(e);
		}

		recognition.current.onresult = (event) => {
			const speechToText = event.results[0][0].transcript;
			setInputValue(speechToText);
		};

		recognition.current.onend = () => {
			setIsListening(false);
		};

		recognition.current.onaudiostart = () => {
			setAudioData(null);
		};

		recognition.current.onaudioend = (event) => {
			console.log("Event object:", event);
			console.log("Event results:", event.results);
			const audioBlob =
				event.results[0] && event.results[0][0] && event.results[0][0].blob;

			if (audioBlob) {
				const audioDataURL = URL.createObjectURL(audioBlob);
				setAudioData(audioDataURL);
			}
		};
		return () => {
			if (recognition.current) {
				recognition.current.stop();
			}
		};
	}, []);

	const handleStartRecord = () => {
		if (!isListening) {
			recognition.current.start();
			setIsListening(true);
			setRecording(true);
		} else {
			recognition.current.stop();
			setIsListening(false);
			setRecording(false);
		}
	};
	const customRecordingSrc = recoding ? "/bot/recording.png" : "/bot/mic.png";
	useEffect(() => {
		try {
			var SpeechRecognition =
				window.SpeechRecognition || window.webkitSpeechRecognition;
			recognition.current = new SpeechRecognition();
		} catch (e) {
			console.error(e);
		}

		recognition.current.onresult = (event) => {
			const speechToText = event.results[0][0].transcript;
			document.getElementById("MSG").value = speechToText;
			insertMessage();
		};

		const insertMessage = () => {
			var msg = document.querySelector(".message-input").value;
			if (msg.trim() === "") {
				return false;
			}
			const newMessage = document.createElement("div");
			newMessage.classList.add("message", "message-personal", "new");
			newMessage.textContent = msg;
			messagesContentRef.current.appendChild(newMessage);
			fetchmsg();
			document.querySelector(".message-input").value = null;
		};

		document.getElementById("mymsg").onsubmit = (e) => {
			e.preventDefault();
			insertMessage();
		};

		const serverMessage = (response2) => {
			if (document.querySelector(".message-input").value !== "") {
				return false;
			}
			const loadingMessage = document.createElement("div");
			loadingMessage.classList.add("message", "loading", "new");
			loadingMessage.innerHTML = ``;
			messagesContentRef.current.appendChild(loadingMessage);

			setTimeout(function () {
				loadingMessage.remove();
				const newMessage = document.createElement("div");
				newMessage.classList.add("message", "new");
				newMessage.innerHTML = ` ${response2} `;
				messagesContentRef.current.appendChild(newMessage);
			}, 100 + Math.random() * 20 * 100);
		};

		const fetchmsg = () => {
			var url = "https://spaceotaku.onrender.com/send-msg";

			const data = new URLSearchParams();
			for (const pair of new FormData(document.getElementById("mymsg"))) {
				data.append(pair[0], pair[1]);
			}

			if (audioData) {
				data.append("audio", audioData);
			}

			fetch(url, {
				method: "POST",
				body: data,
			})
				.then((res) => res.json())
				.then((response) => {
					console.log(response);
					serverMessage(response.Reply);
					speechSynthesis.speak(new SpeechSynthesisUtterance(response.Reply));
				})
				.catch((error) => console.error("Error:", error));
		};
	}, [audioData]);
	const handleChatIconClick = () => {
		setOpen(!open);
	};

	return (
		<div className={`chat ${open ? "open" : ""}`}>
			<div className={`chat-icon ${open ? "open" : ""}`}>
				<Image
					src="/bot/owl.png"
					layout="responsive"
					width={20}
					height={20}
					alt="OrbitOwl"
					onClick={handleChatIconClick}
				></Image>
			</div>
			<div className={`chat-panel ${open ? "open" : "close"}`}>
				<div className="chat-title">
					<figure className="avatar">
						<Image src="/logo.png" alt="Logo" width={20} height={20} />
					</figure>
					<h4>Orbit Owl</h4>
					<button className="close-button" onClick={handleChatIconClick}>
						<Image
							src="/bot/close.png"
							layout="responsive"
							width={20}
							height={20}
							alt="Close"
							onClick={handleChatIconClick}
						></Image>
					</button>
				</div>
				<div className="messages">
					<div className="messages-content" ref={messagesContentRef}></div>
				</div>
				<form className="message-box" id="mymsg" method="POST">
					<input
						type="text"
						id="MSG"
						name="MSG"
						className="message-input"
						placeholder="Your Space Encyclopedia..."
					/>
					<button
						type="button"
						className="message-submit"
						onClick={handleStartRecord}
					>
						<Image
							src={customRecordingSrc}
							layout="responsive"
							width={20}
							height={20}
							alt="MIC"
						></Image>
					</button>
					<button type="submit" className="message-submit">
						<Image
							src="/bot/send.png"
							layout="responsive"
							width={20}
							height={20}
							alt="SEND"
						></Image>
					</button>
				</form>
			</div>
		</div>
	);
}
