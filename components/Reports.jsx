// components/Reports.jsx

import React, { useState, useEffect } from "react";
import { fetchReports } from "@/functions/SpaceFlightApi";

function Reports() {
	const [reports, setReports] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1); // Initial page number

	useEffect(() => {
		async function fetchData() {
			const reportData = await fetchReports(page); // Pass the current page to the API function
			setReports((prevReports) => [...prevReports, ...reportData]);
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
		<div>
			<h2>Reports</h2>
			{reports.map((report) => (
				<div key={report.id}>
					<h3>{report.title}</h3>
					<p>{report.summary}</p>
					<p>Published at: {report.published_at}</p>
					<p>News Site: {report.news_site}</p>
					<p>
						URL:{" "}
						<a href={report.url} target="_blank" rel="noopener noreferrer">
							{report.url}
						</a>
					</p>
					{report.image_url && (
						<img
							src={report.image_url}
							alt="Report"
							style={{ maxWidth: "100%" }}
						/>
					)}
				</div>
			))}
			{loading && <p>Loading...</p>}
		</div>
	);
}

export default Reports;
