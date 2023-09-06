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
	sitemapStream.write({ url: "/", changefreq: "daily", priority: 1.0 });
	sitemapStream.write({
		url: "/celestialpicker",
		changefreq: "daily",
		priority: 1.0,
	});
	sitemapStream.write({
		url: "/solarsystem",
		changefreq: "daily",
		priority: 1.0,
	});

	// End the sitemap stream AFTER writing URLs
	sitemapStream.end();

	// Wait for the stream to finish before proceeding
	await streamToPromise(sitemapStream);
}

generateSitemap()
	.then(() => {
		console.log("Sitemap generated successfully");
	})
	.catch((error) => {
		console.error("Error generating sitemap:", error);
	});
