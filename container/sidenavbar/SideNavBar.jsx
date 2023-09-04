import React, { useState } from "react";
import Link from "next/link";
const SideNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`sidebar ${isOpen ? "open" : "close"}`}>
			<div className="logo-details">
				<i className="bx bxl-c-plus-plus icon"></i>
				<h3 className="logo_name">Space Otaku</h3>
				<i
					className={`bx ${isOpen ? "bx-menu-alt-right" : "bx-menu"}`}
					id="btn"
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
					<Link href="/">
						<i className="bx bx-grid-alt"></i>
						<span className="links_name">Dashboard</span>
					</Link>
					<span className="tooltip">Dashboard</span>
				</li>
				<li>
					<Link href="/">
						<i className="bx bx-user"></i>
						<span className="links_name">User</span>
					</Link>
					<span className="tooltip">User</span>
				</li>
				<li>
					<Link href="/">
						<i className="bx bx-chat"></i>
						<span className="links_name">Messages</span>
					</Link>
					<span className="tooltip">Messages</span>
				</li>
				<li>
					<Link href="/">
						<i className="bx bx-pie-chart-alt-2"></i>
						<span className="links_name">Analytics</span>
					</Link>
					<span className="tooltip">Analytics</span>
				</li>
				<li>
					<Link href="/">
						<i className="bx bx-folder"></i>
						<span className="links_name">File Manager</span>
					</Link>
					<span className="tooltip">Files</span>
				</li>
				<li>
					<Link href="/">
						<i className="bx bx-cart-alt"></i>
						<span className="links_name">Order</span>
					</Link>
					<span className="tooltip">Order</span>
				</li>
				<li>
					<Link href="/">
						<i className="bx bx-heart"></i>
						<span className="links_name">Saved</span>
					</Link>
					<span className="tooltip">Saved</span>
				</li>
				<li>
					<Link href="/">
						<i className="bx bx-cog"></i>
						<span className="links_name">Setting</span>
					</Link>
					<span className="tooltip">Setting</span>
				</li>
				<li className={`profile ${isOpen ? "open" : ""}`}>
					<div className="profile-details">
						{/* <img src="/public/sidenavbar/profile.jpeg" alt="profileImg" /> */}
						<div className="name_job">
							<div className="name">Ankur Halder</div>
							<div className="job">Web Developer</div>
						</div>
					</div>
					<i className="bx bx-log-out" id="log_out"></i>
				</li>
			</ul>
		</div>
	);
};

export default SideNavbar;
