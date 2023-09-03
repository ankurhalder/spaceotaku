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
				sizes="96x96"
				href="/favicon_icons/favicon-96x96.png"
			/>
			<link rel="manifest" href="/manifest.json" />
			<meta name="msapplication-config" content="/browserconfig.xml" />
		</Head>
	);
}
