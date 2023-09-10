import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import https from "https";
const ISS_IMAGE_URL = "/ISS.png";

const ISSMap = () => {
	const [issLocation, setISSLocation] = useState(null);
	const [map, setMap] = useState(null);
	const [issIcon, setISSIcon] = useState(null);

	useEffect(() => {
		const fetchISSLocation = async () => {
			try {
				const response = await axios.get("/api/iss");
				setISSLocation(response.data.iss_position);
			} catch (error) {
				console.error("Error fetching ISS location:", error);
			}
		};
		const interval = setInterval(fetchISSLocation, 500);
		return () => clearInterval(interval);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined" && issLocation) {
			import("leaflet").then((L) => {
				if (!map) {
					const newMap = L.map("map").setView(
						[issLocation.latitude, issLocation.longitude],
						3
					);

					// Move the zoom controls to the top-right corner
					newMap.zoomControl.setPosition("topright");

					L.tileLayer(
						"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					).addTo(newMap);

					const customIcon = L.icon({
						iconUrl: ISS_IMAGE_URL,
						iconSize: [32, 32],
						iconAnchor: [16, 16],
					});

					L.marker([issLocation.latitude, issLocation.longitude], {
						icon: customIcon,
					}).addTo(newMap);

					setMap(newMap);
					setISSIcon(customIcon);
				} else {
					map.setView([issLocation.latitude, issLocation.longitude], 3);
					map.eachLayer((layer) => {
						if (layer instanceof L.Marker) {
							layer.setLatLng([issLocation.latitude, issLocation.longitude]);
							layer.setIcon(issIcon);
						}
					});
				}
			});
		}
	}, [issLocation, map, issIcon]);

	if (!issLocation) {
		return <div className="loading-iss-location">Loading ISS location...</div>;
	}

	return (
		<div className="iss-map-container">
			<h1>Live ISS Location</h1>
			<p>Latitude: {issLocation.latitude}</p>
			<p>Longitude: {issLocation.longitude}</p>
			<Image src={ISS_IMAGE_URL} alt="ISS" width={32} height={32} />
			<div id="map"></div>
		</div>
	);
};

export default ISSMap;
