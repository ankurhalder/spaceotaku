import Head from "next/head";
export default function CommonMeta() {
	return (
		<Head>
			{/* Basic Meta Tags */}
			<meta charSet="UTF-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
			/>
			<meta name="author" content="Ankur Halder" />
			<meta name="robots" content="index, follow" />
			{/* Open Graph Meta Tags (for social sharing) */}
			<meta property="og:image" content="/icons/favicon-32x32.png" />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Space Otaku" />
			{/* Twitter Meta Tags (for Twitter cards) */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Space Otaku - Explore the Universe" />
			<meta
				name="twitter:description"
				content="Your ultimate destination for the latest space news, astronaut activities, satellite locations, solar system details, and more. Explore real-time space information with Next.js, Sass, and Dialogflow chatbot."
			/>
			<meta name="twitter:image" content="/icons/favicon-32x32.png" />
			<meta name="twitter:site" content="@SpaceOtakuOfficial" />
			{/* DNS Prefetch (improves website loading speed) */}
			<link rel="dns-prefetch" href="//www.spaceotaku.online" />
			{/* Mobile App Meta Tags (for Progressive Web Apps and mobile compatibility) */}
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black" />
			{/* Geo locations */}
			<meta name="geo.placename" content="Kolkata, West Bengal, India" />
			<meta name="geo.position" content="22.476632;88.322844" />
			<meta name="geo.region" content="IN-WB" />

			<meta name="language" content="en" />
			<meta name="target" content="all" />
			<meta name="HandheldFriendly" content="True" />
			<meta name="MobileOptimized" content="450" />
			<meta
				name="DC.Description"
				content="Your ultimate destination for space-related information."
			/>
			<meta name="pinterest-rich-pin" content="true" />
			<meta name="rating" content="general" />
			<meta
				name="google-site-verification"
				content="UHzgiXdnV44kTW17GiC7CXXX5NnBxRl4GhXCAfSIXNU"
			/>
			<meta name="yandex-verification" content="6bf6f827d7e4d463" />
			{/*  seobolity verification  */}
			<meta name="seobility" content="bc8ead32fb1b671c727b9e653283b982"></meta>
		</Head>
	);
}
