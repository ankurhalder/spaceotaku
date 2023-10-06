import { ISSMap } from "@/components";
import { Fragment } from "react";
import Head from "next/head";
export default function IssTracker() {
	return (
		<Fragment>
			<Head>
				<title>
					Track International Space Station (ISS) Location in Real Time
				</title>
				<meta
					name="description"
					content="Stay updated with the real-time location of the International Space Station (ISS). Calculate your distance and explore its coordinates on an interactive map."
				/>
				<meta
					name="keywords"
					content=" space otaku,ISS tracking, International Space Station location, real-time ISS tracker, ISS coordinates, space exploration, Earth's orbit, ISS map"
				/>
				<link rel="canonical" href="https://www.spaceotaku.online/isstracker" />
				<link rel="canonical" href="https://spaceotaku.vercel.app/isstracker" />
				<meta
					property="og:url"
					content="https://www.spaceotaku.online/isstracker"
				/>
				<meta
					name="twitter:url"
					content="https://www.spaceotaku.online/isstracker"
				/>
			</Head>
			<div>
				<ISSMap />
			</div>
		</Fragment>
	);
}
