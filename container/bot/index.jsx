import Head from "next/head";
import dynamic from "next/dynamic";

const ChatComponent = dynamic(() => import("./ChatComponent"), {
	ssr: false,
});

export default function ChatBot() {
	return (
		<div>
			{/* <Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<title>ML chatbot</title>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.min.css"
				/>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
					integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
					crossOrigin="anonymous"
				/>
			</Head> */}
			<ChatComponent />
		</div>
	);
}
