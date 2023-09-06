import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SideNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const links = [
		{ href: "/", icon: "/sidenavbar/house.png", label: "Home" },
		{
			href: "/solarsystem",
			icon: "/sidenavbar/solar-system.png",
			label: "Solar System",
		},
		{
			href: "/celestialpicker",
			icon: "/sidenavbar/planets.png",
			label: "Celestial Bodies",
		},
		{ href: "/", icon: "/sidenavbar/question.png", label: "Coming Soon" },
		{ href: "/", icon: "/sidenavbar/question.png", label: "Coming Soon" },
		{ href: "/", icon: "/sidenavbar/question.png", label: "Coming Soon" },
		{ href: "/", icon: "/sidenavbar/question.png", label: "Coming Soon" },
		{ href: "/", icon: "/sidenavbar/question.png", label: "Coming Soon" },
	];

	return (
		<div className={`sidebar ${isOpen ? "open" : "close"}`}>
			<div className="logo-details">
				<div className="logo-container">
					<Image src="/logo.png" layout="fill" alt="Logo" />
				</div>
				<h2 className="logo_name">Space Otaku</h2>
				<i
					className={`bx ${isOpen ? "bx-x-circle" : "bx-menu"}`}
					id="btn"
					onClick={toggleSidebar}
				></i>
			</div>
			<ul className="nav-list">
				{links.map((link, index) => (
					<li key={index} className={isOpen ? "open" : "close"}>
						<Link href={link.href}>
							<div className="image-container">
								<Image src={link.icon} layout="fill" alt={link.label} />
							</div>
							{isOpen ? <span className="links_name">{link.label}</span> : null}
						</Link>
					</li>
				))}
			</ul>
			<div className={`profile ${isOpen ? "profile-open" : "profile-close"}`}>
				<div className="profile-details">
					<div className="image-container">
						<Image src="/profile.jpeg" layout="fill" alt="Profile" />
					</div>
					<div className="name_job">
						<div className="name">Ankur Halder</div>
						<div className="job">Web Developer</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideNavbar;
