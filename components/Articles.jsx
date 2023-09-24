/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchArticles } from "@/functions/SpaceFlightApi";
const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const isClient = typeof window !== "undefined";
	const isMobile =
		isClient &&
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);
	useEffect(() => {
		async function fetchData() {
			const articleData = await fetchArticles(page);
			setArticles((prevArticles) => [...prevArticles, ...articleData]);
			setLoading(false);
		}
		fetchData();
	}, [page]);

	const handleScroll = () => {
		if (
			(!isMobile &&
				window.innerHeight + window.pageYOffset >=
					document.documentElement.offsetHeight) ||
			(isMobile &&
				window.innerHeight + window.pageYOffset + 100 >=
					document.documentElement.offsetHeight)
		) {
			setPage((prevPage) => prevPage + 1);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div key={articles.id} className="articles none">
			<h3>Space News Articles</h3>
			<ul>
				{articles.map((article) => (
					<li key={article.id}>
						<h4>{article.title}</h4>
						<p className="summary">{article.summary}</p>
						<a href={article.url} target="_blank" rel="noopener noreferrer">
							Read More...
						</a>
						<img
							className="image-container"
							src={article.image_url}
							alt={article.title}
						/>
						<p className="published-at">
							Published at:
							<span>{new Date(article.published_at).toLocaleString()}</span>
						</p>
						<p className="updated-at">
							Updated at:
							<span>{new Date(article.updated_at).toLocaleString()}</span>
						</p>
						<p className="news-site">
							News Site:
							<span>{article.news_site}</span>
						</p>
						<p className="featured">
							Featured:
							<span>{article.featured ? "Yes" : "No"}</span>
						</p>

						{article.launches.length > 0 && (
							<div className="launches">
								<h6>Launches:</h6>
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

						{article.events.length > 0 && (
							<div className="events">
								<h6>Events:</h6>
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
					</li>
				))}
			</ul>
		</div>
	);
};

export default Articles;
