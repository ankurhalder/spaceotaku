import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SideNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const links = [
		{ href: "/", icon: "bx bxs-home", label: "Home" },
		{ href: "/", icon: "bx bx-user", label: "Profile" },
		{ href: "/", icon: "bx bx-chat", label: "Chat" },
		{ href: "/", icon: "bx bx-pie-chart-alt-2", label: "Statistics" },
		{ href: "/", icon: "bx bx-folder", label: "Folders" },
		{ href: "/", icon: "bx bx-cart-alt", label: "Cart" },
		{ href: "/", icon: "bx bx-heart", label: "Favorites" },
		{ href: "/", icon: "bx bx-cog", label: "Settings" },
	];

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
				{links.map((link, index) => (
					<li
						key={index}
						className={isOpen ? "open" : "close"} // Add or remove the class here
					>
						<Link href={link.href}>
							<i className={link.icon}></i>
							<span className="links_name">{link.label}</span>
						</Link>
					</li>
				))}
				<li className={`profile ${isOpen ? "open" : "close"}`}>
					<div className="profile-details">
						<div className="image-container">
							<Image src="/profile.jpeg" layout="fill" alt="Profile"></Image>
						</div>
						<div className="name_job">
							<div className="name">Ankur Halder</div>
							<div className="job">Web Developer</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default SideNavbar;
