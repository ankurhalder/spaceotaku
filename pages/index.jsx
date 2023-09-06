import Head from "next/head";
import { Fragment } from "react";
function index() {
	return (
		<Fragment>
			<Head>
				<title>Space Otaku</title>
				<meta
					name="description"
					content="Your ultimate destination for the latest space news, astronaut activities, satellite locations, solar system details, and more. Explore real-time space information."
				/>
			</Head>
			<div className="landing-page">
				<h1>This is Created by Ankur </h1>

				<h3>space otaku</h3>
			</div>
		</Fragment>
	);
}

export default index;
