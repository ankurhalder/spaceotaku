import "../styles/main.scss";
import { Fragment } from "react";
import { IconMeta, CommonMeta } from "@/components";
export default function App({ Component, pageProps }) {
	return (
		<Fragment>
			<IconMeta></IconMeta>
			<CommonMeta></CommonMeta>
			<Component {...pageProps} />
		</Fragment>
	);
}
