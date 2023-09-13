/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { fetchBlogs } from "@/functions/SpaceFlightApi";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1); // Initial page number

	// Check if we're running on the client side
	const isClient = typeof window !== "undefined";

	// Add isMobile detection only if we're on the client side
	const isMobile =
		isClient &&
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);

	useEffect(() => {
		async function fetchData() {
			const blogData = await fetchBlogs(page); // Pass the current page to the API function
			setBlogs((prevBlogs) => [...prevBlogs, ...blogData]);
			setLoading(false);
		}
		fetchData();
	}, [page]); // Trigger the effect when the page number changes

	const handleScroll = () => {
		if (
			(isClient && // Check if we're on the client side
				(!isMobile || // Check if it's not a mobile device
					window.innerHeight + window.pageYOffset >=
						document.documentElement.offsetHeight)) ||
			(isClient && // Check if we're on the client side
				isMobile && // For mobile devices, add a buffer to trigger earlier
				window.innerHeight + window.pageYOffset + 100 >=
					document.documentElement.offsetHeight)
		) {
			// User has scrolled to the bottom of the page
			setPage((prevPage) => prevPage + 1); // Load the next page of data
		}
	};

	useEffect(() => {
		if (isClient) {
			// Only add the scroll event listener if we're on the client side
			window.addEventListener("scroll", handleScroll);
		}
		return () => {
			if (isClient) {
				// Only remove the scroll event listener if we're on the client side
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, []); // Add and remove scroll event listener

	return (
		<div className="blogs">
			<h3>Blogs</h3>
			<ul>
				{blogs.map((blog) => (
					<li key={blog.id}>
						<h4>{blog.title}</h4>
						<p>
							<strong>Published:</strong> {blog.published_at}
						</p>
						<p>
							<strong>News Site:</strong> {blog.news_site}
						</p>
						<p>
							<strong>Summary:</strong> {blog.summary}
						</p>
						<p>
							<strong>URL:</strong>{" "}
							<a
								href={blog.url}
								target="_blank"
								rel="noopener noreferrer"
								className="blog-url"
							>
								{blog.url}
							</a>
						</p>
						{blog.image_url && <img src={blog.image_url} alt={blog.title} />}
						<p>
							<strong>Featured:</strong> {blog.featured ? "Yes" : "No"}
						</p>
					</li>
				))}
			</ul>
			{loading && <p>Loading...</p>}
		</div>
	);
};

export default Blogs;
