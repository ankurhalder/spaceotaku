// components/SideNavbar.js

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faXmark,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const SideNavbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
			<div className="logo-details">
				<Image src="/SpaceOtaku.png" width={50} height={50} alt="logo"></Image>
				<div className="logo_name">CodingLab</div>
				{isSidebarOpen ? (
					<FontAwesomeIcon
						icon={faBars}
						onClick={toggleSidebar}
					></FontAwesomeIcon>
				) : (
					<FontAwesomeIcon
						icon={faXmark}
						onClick={toggleSidebar}
					></FontAwesomeIcon>
				)}
			</div>
			<ul className="nav-list">
				<li>
					<FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
					<input type="text" placeholder="Search..." />
					<span className="tooltip">Search</span>
				</li>
				<li>
					<Link href="#">
						<FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
						<span className="links_name">Dashboard</span>
					</Link>
					<span className="tooltip">Dashboard</span>
				</li>

				<li>
					<Link href="#">
						<FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
						<span className="links_name">User</span>
					</Link>
					<span className="tooltip">User</span>
				</li>

				<li className="profile">
					<div className="profile-details">
						<Image
							src="/SpaceOtaku.png"
							width={50}
							height={50}
							alt="logo"
						></Image>
						<div className="name_job">
							<div className="name">Prem Shahi</div>
							<div className="job">Web designer</div>
						</div>
					</div>
					<FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
				</li>
			</ul>
		</div>
	);
};

export default SideNavbar;
