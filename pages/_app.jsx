import "../styles/main.scss";
import { CustomHead, CommonMeta } from "@/components";
import { Fragment } from "react";
import { SideBar } from "@/container";
export default function App({ Component, pageProps }) {
	return (
		<Fragment>
			<CustomHead></CustomHead>
			<CommonMeta></CommonMeta>
			<SideBar></SideBar>
			<Component {...pageProps} />
		</Fragment>
	);
}
