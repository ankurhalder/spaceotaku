import "../styles/main.scss";
import { CustomHead, CommonMeta } from "@/components";
import { Fragment } from "react";
// import { SideNavbar } from "@/container";
export default function App({ Component, pageProps }) {
	return (
		<Fragment>
			<CustomHead></CustomHead>
			<CommonMeta></CommonMeta>
			{/* <SideNavbar></SideNavbar> */}
			<Component {...pageProps} />
		</Fragment>
	);
}
