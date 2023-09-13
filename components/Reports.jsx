/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { fetchReports } from "@/functions/SpaceFlightApi";

function Reports() {
	const [reports, setReports] = useState([]);
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
			const reportData = await fetchReports(page); // Pass the current page to the API function
			setReports((prevReports) => [...prevReports, ...reportData]);
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
		<div className="reports">
			<h3>Reports</h3>
			{reports.map((report) => (
				<div key={report.id} className="report">
					<h4 className="report-title">{report.title}</h4>
					<p className="report-summary">{report.summary}</p>
					<p>
						<strong>Published at:</strong> {report.published_at}
					</p>
					<p>
						<strong>News Site:</strong> {report.news_site}
					</p>
					<p>
						<strong>URL:</strong>{" "}
						<a
							href={report.url}
							target="_blank"
							rel="noopener noreferrer"
							className="report-url"
						>
							{report.url}
						</a>
					</p>
					{report.image_url && (
						<img src={report.image_url} alt="Report" className="report-image" />
					)}
				</div>
			))}
			{loading && <p>Loading...</p>}
		</div>
	);
}

export default Reports;
