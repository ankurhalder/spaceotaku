import "../styles/main.scss";
import { Fragment } from "react";
import Layout from "@/layout/Layout";
export default function App({ Component, pageProps }) {
	return (
		<Fragment>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Fragment>
	);
}
