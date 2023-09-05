import Layout from "@/layout/Layout";
import { Fragment } from "react";
export default function SolarSystem() {
	return (
		<Fragment>
			<h1 className="solar-sysytem-heading">Solar System By Space Otaku</h1>
			<Layout>
				<iframe
					className="solar-system-container"
					src="https://spaceotakusolarsystem.netlify.app/"
					title="Space Otaku Solar System"
				></iframe>
			</Layout>
		</Fragment>
	);
}
