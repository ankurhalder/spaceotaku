import "../styles/main.scss";
import { CustomHead, CommonMeta } from "@/components";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
	return (
		<Fragment>
			<CustomHead></CustomHead>
			<CommonMeta></CommonMeta>

			<Component {...pageProps} />
		</Fragment>
	);
}
