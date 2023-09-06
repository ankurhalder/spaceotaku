import Head from "next/head";
import { Fragment } from "react";
function index() {
	return (
		<Fragment>
			<Head>
				<title>Space Otaku | Your Destination for all space News</title>
				<meta
					name="description"
					content="Your ultimate destination for the latest space news, astronaut activities, satellite locations, solar system details, and more. Explore real-time space information."
				/>
			</Head>
			<div className="landing-page">
				<h1>Welcome to Space Otaku</h1>
				<h2>Your destination for all space news and all</h2>
			</div>
		</Fragment>
	);
}

export default index;
