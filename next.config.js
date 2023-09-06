/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	serverRuntimeConfig: {
		// Define server-specific configuration here
		BASE_URL: "https://www.spaceotaku.online/",
	},
	publicRuntimeConfig: {
		// Define public (client-side) configuration here
		BASE_URL: "https://www.spaceotaku.online/",
	},
	// Other Next.js configuration options...
};

module.exports = nextConfig;
