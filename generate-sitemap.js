const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { resolve } = require("path");
const { serverRuntimeConfig } = require("./next.config");
const { publicRuntimeConfig } = require("./next.config");

const baseUrl =
	serverRuntimeConfig.BASE_URL ||
	publicRuntimeConfig.BASE_URL ||
	"https://www.spaceotaku.online/";

async function generateSitemap() {
	const sitemapStream = new SitemapStream({ hostname: baseUrl });

	// Add URLs to your sitemap here
	sitemapStream.write({ url: "/", changefreq: "always", priority: 1.0 });
	sitemapStream.write({
		url: "/celestialpicker",
		changefreq: "monthly",
		priority: 0.9,
	});
	sitemapStream.write({
		url: "/solarsystem",
		changefreq: "yearly",
		priority: 0.5,
	});
	sitemapStream.write({
		url: "/isstracker",
		changefreq: "always",
		priority: 1.0,
	});
	sitemapStream.write({
		url: "/spacefacts",
		changefreq: "yearly",
		priority: 0.8,
	});
	// End the sitemap stream AFTER writing URLs
	sitemapStream.end();

	// Wait for the stream to finish before proceeding
	const sitemap = await streamToPromise(sitemapStream);

	// Write the sitemap to a file in the public directory
	const sitemapPath = resolve("./public/sitemap.xml");
	const writeStream = createWriteStream(sitemapPath);
	writeStream.write(sitemap);
	writeStream.end();
}

generateSitemap()
	.then(() => {
		console.log("Sitemap generated successfully");
	})
	.catch((error) => {
		console.error("Error generating sitemap:", error);
	});
