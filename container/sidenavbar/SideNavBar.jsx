import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Home",
			icon: "/sidenavbar/home.png",
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
							<div className="logo-container">
								<Image src="/logo.png" layout="fill" alt="Logo"></Image>
							</div>
						</div>
					)}

					<h2
						className={`${
							isExpanded ? "heading-expanded" : "heading-not-expanded"
						}`}
					>
						Space Otaku
					</h2>
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
				<div
					className={`nav-menu  ${
						isExpanded ? "expanded-nav-menu" : "not-expanded-nav-menu"
					}`}
				>
					{menuItems.map(({ text, icon }) => (
						<Link
							key={text}
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="/"
						>
							<div className="menu-item-icon">
								<Image src={icon} width={40} height={40} alt="ICON"></Image>
							</div>
							{isExpanded && <p>{text}</p>}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default SideNavBar;
