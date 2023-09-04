import Head from "next/head";
import Layout from "@/layout/Layout";
import { TwinklingStars } from "@/components";
function index() {
	return (
		<Layout>
			<Head>
				<title>Space Otaku</title>
				<meta
					name="description"
					content="Your ultimate destination for the latest space news, astronaut activities, satellite locations, solar system details, and more. Explore real-time space information."
				/>
			</Head>
			<div className="landing-page">
				<TwinklingStars
					numberOfTwinkling={50}
					numberOfNonTwinkling={50}
				></TwinklingStars>
				<h1>This is Created by Ankur </h1>

				<h3>space otaku</h3>
			</div>
		</Layout>
	);
}

export default index;
