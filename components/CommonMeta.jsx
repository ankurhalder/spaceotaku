import Head from "next/head";
export default function CommonMeta() {
	return (
		<Head>
			{/* Basic Meta Tags */}
			<meta charSet="UTF-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
			/>
			<meta name="author" content="Ankur Halder" />
			<meta name="robots" content="index, follow" />
			{/* Open Graph Meta Tags (for social sharing) */}
			<meta property="og:image" content="/favicon_icons/favicon-32x32.png" />
			<meta property="og:url" content="https://www.spaceotaku.online/" />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Space Otaku" />
			{/* Twitter Meta Tags (for Twitter cards) */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Space Otaku - Explore the Universe" />
			<meta
				name="twitter:description"
				content="Your ultimate destination for the latest space news, astronaut activities, satellite locations, solar system details, and more. Explore real-time space information with Next.js, Sass, and Dialogflow chatbot."
			/>
			<meta name="twitter:image" content="/favicon_icons/favicon-32x32.png" />
			<meta name="twitter:url" content="https://www.spaceotaku.online/" />
			<meta name="twitter:site" content="@SpaceOtakuOfficial" />
			{/* DNS Prefetch (improves website loading speed) */}
			<link rel="dns-prefetch" href="//www.spaceotaku.online" />
			{/* Mobile App Meta Tags (for Progressive Web Apps and mobile compatibility) */}
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black" />
			{/* Canonical Link (to specify the preferred version of your page) */}
			<link rel="canonical" href="https://spaceotaku.online/" />
			{/* Geo locations */}
			<meta name="geo.placename" content="Kolkata, West Bengal, India" />
			<meta name="geo.position" content="22.476632;88.322844" />
			<meta name="geo.region" content="IN-WB" />
			<meta name="language" content="English" />
			{/* Additional SEO Meta Tags */}
			<meta name="target" content="all" />
			<meta name="HandheldFriendly" content="True" />
			<meta name="MobileOptimized" content="450" />
			{/* Dublin Core Meta Tags */}
			<meta name="DC.Title" content="Space Otaku - Explore the Universe" />
			<meta name="DC.Creator" content="Ankur" />
			<meta
				name="DC.Description"
				content="Your ultimate destination for space-related information."
			/>
			{/* Pinterest Meta Tags */}
			<meta name="pinterest-rich-pin" content="true" />
			{/* Rating Meta Tags */}
			<meta name="rating" content="general" />

			{/* Google Search Console Verification */}
			<meta
				name="google-site-verification"
				content="UHzgiXdnV44kTW17GiC7CXXX5NnBxRl4GhXCAfSIXNU"
			/>

			{/* Bing Webmaster Tools Verification */}

			{/* <meta name="msvalidate.01" content="" /> */}

			{/* Yandex Webmaster Verification */}
			{/* <meta
				name="yandex-verification"
				content="YOUR_YANDEX_WEBMASTER_VERIFICATION_CODE"
			/> */}
		</Head>
	);
}
