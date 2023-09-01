import "../styles/main.scss";
import { CustomHead } from "@/components";
import { Fragment } from "react";
export default function App({ Component, pageProps }) {
	return (
		<Fragment>
			<CustomHead></CustomHead>
			<Component {...pageProps} />
		</Fragment>
	);
}
