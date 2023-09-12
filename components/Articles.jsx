// components/Articles.js
import { useEffect, useState } from "react";
import { fetchArticles } from "@/functions/SpaceFlightApi";

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1); // Initial page number

	useEffect(() => {
		async function fetchData() {
			const articleData = await fetchArticles(page); // Pass the current page to the API function
			setArticles((prevArticles) => [...prevArticles, ...articleData]);
			setLoading(false);
		}
		fetchData();
	}, [page]); // Trigger the effect when the page number changes

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.offsetHeight
		) {
			// User has scrolled to the bottom of the page
			setPage((prevPage) => prevPage + 1); // Load the next page of data
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []); // Add and remove scroll event listener

	return (
		<div key={articles.id} className="articles">
			<h3>Spaceflight News Articles</h3>
			<ul>
				{articles.map((article) => (
					<li key={article.id}>
						<h2>{article.title}</h2>
						<p>{article.summary}</p>
						<a href={article.url} target="_blank" rel="noopener noreferrer">
							Read More
						</a>
						<img src={article.image_url} alt={article.title} />
						<p>
							Published at: {new Date(article.published_at).toLocaleString()}
						</p>
						<p>Updated at: {new Date(article.updated_at).toLocaleString()}</p>
						<p>News Site: {article.news_site}</p>
						<p>Featured: {article.featured ? "Yes" : "No"}</p>

						{/* Display launches if available */}
						{article.launches.length > 0 && (
							<div>
								<h3>Launches:</h3>
								<ul>
									{article.launches.map((launch) => (
										<li key={launch.launch_id}>
											<p>Launch ID: {launch.launch_id}</p>
											<p>Provider: {launch.provider}</p>
										</li>
									))}
								</ul>
							</div>
						)}

						{/* Display events if available */}
						{article.events.length > 0 && (
							<div>
								<h3>Events:</h3>
								<ul>
									{article.events.map((event) => (
										<li key={event.event_id}>
											<p>Event ID: {event.event_id}</p>
											<p>Provider: {event.provider}</p>
										</li>
									))}
								</ul>
							</div>
						)}

						<hr />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Articles;
