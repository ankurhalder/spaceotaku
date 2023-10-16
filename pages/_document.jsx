import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="msapplication-config" content="/browserconfig.xml" />
					<link rel="manifest" href="/manifest.json" />
					<link
						href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
						rel="stylesheet"
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                          (function(c,l,a,r,i,t,y){
                          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                          })(window, document, "clarity", "script", "ioi3g8s3zl");
                         `,
						}}
					/>
				</Head>
				<body className="none">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
