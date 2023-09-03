import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: "/sidenavbar/grid.svg",
		},
		{
			text: "Admin Profile",
			icon: "/sidenavbar/user.svg",
		},
		{
			text: "Messages",
			icon: "/sidenavbar/message.svg",
		},
		{
			text: "Analytics",
			icon: "/sidenavbar/pie-chart.svg",
		},
		{
			text: "File Manager",
			icon: "/sidenavbar/folder.svg",
		},
		{
			text: "Orders",
			icon: "/sidenavbar/shopping-cart.svg",
		},
		{
			text: "Saved Items",
			icon: "/sidenavbar/heart.svg",
		},
		{
			text: "Settings",
			icon: "/sidenavbar/settings.svg",
		},
	];

	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<Image
								src="/sidenavbar/solar-system.png"
								width={150}
								height={150}
								alt="Logo"
							></Image>
							<h2>Space Otaku</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<Link
							key={text}
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="/"
						>
							<div className="menu-item-icon">
								<Image src={icon} width={25} height={25} alt="ICON"></Image>
							</div>
							{isExpanded && <p>{text}</p>}
						</Link>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<div className="nav-footer-avater">
							<Image
								src="/sidenavbar/admin-avatar.svg"
								width={30}
								height={30}
								alt="ADMIN"
							></Image>
						</div>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">M Showkat</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				{/* <img className="logout-icon" src="icons/logout.svg" alt="" /> */}
				<Image
					src="/sidenavbar/logout.svg"
					width={40}
					height={40}
					alt="Logout"
				></Image>
			</div>
		</div>
	);
};

export default SideNavBar;
