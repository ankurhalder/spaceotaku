import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Head from "next/head";
const ISS_IMAGE_URL = "/ISS.png";

const ISSMap = () => {
	const [issLocation, setISSLocation] = useState(null);
	const [map, setMap] = useState(null);
	const [issIcon, setISSIcon] = useState(null);
	const [userLocation, setUserLocation] = useState(null);
	const [distanceToISS, setDistanceToISS] = useState(null);

	function calculateDistance(lat1, lon1, lat2, lon2) {
		const R = 6371; // Radius of the Earth in kilometers
		const lat1Rad = (Math.PI / 180) * lat1;
		const lat2Rad = (Math.PI / 180) * lat2;
		const lon1Rad = (Math.PI / 180) * lon1;
		const lon2Rad = (Math.PI / 180) * lon2;

		const dLat = lat2Rad - lat1Rad;
		const dLon = lon2Rad - lon1Rad;

		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(lat1Rad) *
				Math.cos(lat2Rad) *
				Math.sin(dLon / 2) *
				Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

		const distance = R * c; // Distance in kilometers
		return distance;
	}

	const getUserLocation = () => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				setUserLocation({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				});
			});
		}
	};

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
	}, []);

	useEffect(() => {
		getUserLocation();
	}, []);

	useEffect(() => {
		let timeoutId;

		const updateDistance = () => {
			if (userLocation && issLocation) {
				const distance = calculateDistance(
					userLocation.latitude,
					userLocation.longitude,
					issLocation.latitude,
					issLocation.longitude
				);
				setDistanceToISS(distance.toFixed(2));
			}
			timeoutId = setTimeout(updateDistance, 500);
		};

		updateDistance();

		return () => clearTimeout(timeoutId);
	}, [userLocation, issLocation]);

	useEffect(() => {
		if (typeof window !== "undefined" && issLocation) {
			import("leaflet").then((L) => {
				if (!map) {
					const newMap = L.map("map").setView(
						[issLocation.latitude, issLocation.longitude],
						3
					);

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
		<Fragment>
			<div className="iss-map-container">
				<h1>Live International Space Station (ISS) Location</h1>
				<p className="lat">Latitude: {issLocation.latitude}</p>
				<p className="lon">Longitude: {issLocation.longitude}</p>
				<p className="user-lat">
					Your Latitude: {userLocation ? userLocation.latitude : "Loading..."}
				</p>
				<p className="user-lon">
					Your Longitude: {userLocation ? userLocation.longitude : "Loading..."}
				</p>
				<p className="distance">
					Distance to ISS:{" "}
					{distanceToISS ? `${distanceToISS} km` : "Calculating..."}
				</p>

				<div id="map"></div>
			</div>
		</Fragment>
	);
};

export default ISSMap;
