import { Fragment } from "react";
export default function SolarSystem() {
	return (
		<Fragment>
			<h1 className="solar-sysytem-heading">Solar System By Space Otaku</h1>
			<iframe
				className="solar-system-container"
				src="https://spaceotakusolarsystem.netlify.app/"
				title="Space Otaku Solar System"
			></iframe>
		</Fragment>
	);
}
