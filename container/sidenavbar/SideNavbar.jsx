import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Sidebar({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const menuItem = [
		{
			path: "/",
			name: "Coming Soon",
			icon: "/sidenavbar/question.svg",
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: "/sidenavbar/question.svg",
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: "/sidenavbar/question.svg",
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: "/sidenavbar/question.svg",
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: "/sidenavbar/question.svg",
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: "/sidenavbar/question.svg",
		},
	];

	return (
		<nav className="sidenav-container">
			<div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
				<div className="top_section">
					<div className="logo">
						<Image
							src="/SpaceOtaku.png"
							width={180}
							height={180}
							alt="LOGO"
							style={{ display: isOpen ? "block" : "none" }}
						></Image>
					</div>
					<div
						style={{ marginLeft: isOpen ? "50px" : "0px" }}
						className="bars"
						onClick={toggle}
					>
						{isOpen ? (
							<div className="closing-menu-container">
								<Image
									src="/sidenavbar/close.svg"
									width={30}
									height={30}
									alt="BARS"
								></Image>
							</div>
						) : (
							<div className="menu-container">
								<Image
									src="/sidenavbar/menu.svg"
									width={30}
									height={30}
									alt="BARS"
								></Image>
							</div>
						)}
					</div>
				</div>
				{menuItem.map((item, index) => (
					<Link href={item.path} key={index}>
						<div className="items">
							<div className="icon">
								<Image
									src={item.icon}
									width={30}
									height={30}
									alt={item.icon}
								></Image>
							</div>
							<div
								style={{ display: isOpen ? "block" : "none" }}
								className="link_text"
							>
								{item.name}
							</div>
						</div>
					</Link>
				))}
			</div>
			<main>{children}</main>
		</nav>
	);
}
