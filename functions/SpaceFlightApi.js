const apiUrl = "https://api.spaceflightnewsapi.net/v4";

export async function fetchArticles(page) {
	const perPage = 15;
	const offset = (page - 1) * perPage;

	try {
		const response = await fetch(
			`${apiUrl}/articles/?format=json&limit=${perPage}&offset=${offset}`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch articles");
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error("Error fetching articles:", error);
		return [];
	}
}

export async function fetchBlogs(page) {
	const perPage = 15;
	const offset = (page - 1) * perPage;

	try {
		const response = await fetch(
			`${apiUrl}/blogs/?format=json&limit=${perPage}&offset=${offset}`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch blogs");
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error("Error fetching blogs:", error);
		return [];
	}
}

export async function fetchReports(page) {
	const perPage = 15;
	const offset = (page - 1) * perPage;

	try {
		const response = await fetch(
			`${apiUrl}/reports/?format=json&limit=${perPage}&offset=${offset}`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch reports");
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error("Error fetching reports:", error);
		return [];
	}
}
