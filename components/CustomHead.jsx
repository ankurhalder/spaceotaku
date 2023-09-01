import Head from "next/head";

export default function CustomHead() {
	return (
		<Head>
			<link rel="icon" type="image/x-icon" href="/favicon_icons/favicon.ico" />
			<link
				rel="icon"
				type="image/png"
				href="/favicon_icons/favicon-32x32.png"
				sizes="32x32"
			></link>
			<link
				rel="icon"
				type="image/png"
				href="/favicon_icons/favicon-16x16.png"
				sizes="16x16"
			></link>
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/favicon_icons/android-chrome-192x192.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="512x512"
				href="/favicon_icons/android-chrome-512x512.png"
			/>
			<link
				rel="apple-touch-icon"
				type="image/png"
				sizes="180x180"
				href="/favicon_icons/apple-touch-icon.png"
			/>
		</Head>
	);
}
