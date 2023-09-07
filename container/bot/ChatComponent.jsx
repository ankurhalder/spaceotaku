import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
	faMicrophone,
	faPaperPlane,
	faComment,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Script from "next/script";
import $ from "jquery";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
export default function ChatComponent() {
	const [open, setOpen] = useState(false);
	const messagesContentRef = useRef(null);
	const [inputValue, setInputValue] = useState("");

	const [isListening, setIsListening] = useState(false);
	const recognition = useRef(null);

	const [audioData, setAudioData] = useState(null);

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
		} else {
			recognition.current.stop();
			setIsListening(false);
		}
	};

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

		const handleComponentLoad = async () => {
			// Browserify setup
			if (
				typeof window !== "undefined" &&
				window.$ &&
				typeof window.$.fn.mCustomScrollbar === "function"
			) {
				$(messagesContentRef.current).mCustomScrollbar();
			} else {
				// Load jQuery and malihu-custom-scrollbar-plugin
				await import("jquery");
				await import(
					"malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min"
				);
				$(messagesContentRef.current).mCustomScrollbar();
			}

			setTimeout(function () {
				serverMessage("Hello I am Space Otacu Bot How Can i help you?");
			}, 100);
		};

		const updateScrollbar = () => {
			$(messagesContentRef.current)
				.mCustomScrollbar("update")
				.mCustomScrollbar("scrollTo", "bottom", {
					scrollInertia: 10,
					timeout: 0,
				});
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
			updateScrollbar();
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
			updateScrollbar();

			setTimeout(function () {
				loadingMessage.remove();
				const newMessage = document.createElement("div");
				newMessage.classList.add("message", "new");
				newMessage.innerHTML = ` ${response2} `;
				messagesContentRef.current.appendChild(newMessage);
				updateScrollbar();
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

		handleComponentLoad();
	}, [audioData]);
	const handleChatIconClick = () => {
		setOpen(!open);
	};

	return (
		<div className={`chat ${open ? "open" : ""}`}>
			<div className="chat-icon">
				<FontAwesomeIcon icon={faComment} onClick={handleChatIconClick} />
			</div>
			<div className={`chat-panel ${open ? "open" : "close"}`}>
				<div className="chat-title">
					<h1>Space Otaku</h1>
					<button className="close-button" onClick={handleChatIconClick}>
						<FontAwesomeIcon icon={faTimes} />
					</button>
					<h2>I am a Servent of Space Otaku Created by Ankur Halder</h2>
					<figure className="avatar">
						<Image src="/bot.png" alt="Bot Avatar" width={20} height={20} />
					</figure>
				</div>
				<div className="messages">
					<div className="messages-content" ref={messagesContentRef}></div>
					<div className="suggestion"></div>
				</div>
				<form className="message-box" id="mymsg" method="POST">
					<input
						type="text"
						id="MSG"
						name="MSG"
						className="message-input"
						placeholder="Type message..."
					/>
					<button
						type="button"
						className="message-submit"
						onClick={handleStartRecord}
					>
						<FontAwesomeIcon icon={faMicrophone} />
					</button>
					<button type="submit" className="message-submit">
						<FontAwesomeIcon icon={faPaperPlane} />
					</button>
				</form>
				{/* <Script
					src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
					strategy="afterInteractive"
				/> */}
			</div>
		</div>
	);
}
