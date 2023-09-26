/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { fetchReports } from "@/functions/SpaceFlightApi";

function Reports() {
	const [reports, setReports] = useState([]);
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
			const reportData = await fetchReports(page);
			setReports((prevReports) => [...prevReports, ...reportData]);
			setLoading(false);
		}
		fetchData();
	}, [page]);

	const handleScroll = () => {
		if (
			(isClient &&
				(!isMobile ||
					window.innerHeight + window.pageYOffset >=
						document.documentElement.offsetHeight)) ||
			(isClient &&
				isMobile &&
				window.innerHeight + window.pageYOffset + 100 >=
					document.documentElement.offsetHeight)
		) {
			setPage((prevPage) => prevPage + 1);
		}
	};

	useEffect(() => {
		if (isClient) {
			window.addEventListener("scroll", handleScroll);
		}
		return () => {
			if (isClient) {
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);
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
