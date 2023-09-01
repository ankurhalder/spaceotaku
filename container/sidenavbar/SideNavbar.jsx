// components/SideNavbar.js

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SideNavbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
			<div className="logo-details">
				<i className="bx bxl-c-plus-plus icon"></i>
				<div className="logo_name">CodingLab</div>
				<i
					className={`bx ${isSidebarOpen ? "bx-menu-alt-right" : "bx-menu"}`}
					onClick={toggleSidebar}
				></i>
			</div>
			<ul className="nav-list">
				<li>
					<i className="bx bx-search"></i>
					<input type="text" placeholder="Search..." />
					<span className="tooltip">Search</span>
				</li>
				<li>
					<Link href="#">
						<i className="bx bx-grid-alt"></i>
						<span className="links_name">Dashboard</span>
					</Link>
					<span className="tooltip">Dashboard</span>
				</li>

				<li>
					<Link href="#">
						<i className="bx bx-user"></i>
						<span className="links_name">User</span>
					</Link>
					<span className="tooltip">User</span>
				</li>

				<li className="profile">
					<div className="profile-details">
						<Image src="/profile.jpg" alt="profileImg" width={50} height={50} />
						<div className="name_job">
							<div className="name">Prem Shahi</div>
							<div className="job">Web designer</div>
						</div>
					</div>
					<i className="bx bx-log-out" id="log_out"></i>
				</li>
			</ul>
		</div>
	);
};

export default SideNavbar;
