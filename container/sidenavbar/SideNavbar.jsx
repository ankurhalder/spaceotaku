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
			icon: "/sidenavbar/menu.svg",
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: "/sidenavbar/menu.svg",
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: "/sidenavbar/menu.svg",
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: "/sidenavbar/menu.svg",
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: "/sidenavbar/menu.svg",
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: "/sidenavbar/menu.svg",
		},
	];

	return (
		<nav className="container">
			<div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
				<div className="top_section">
					<Image
						src="/SpaceOtaku.png"
						width={30}
						height={30}
						alt="LOGO"
						style={{ display: isOpen ? "block" : "none" }}
					></Image>
					<h2 style={{ display: isOpen ? "block" : "none" }} className="logo">
						Space Otaku
					</h2>
					<div
						style={{ marginLeft: isOpen ? "50px" : "0px" }}
						className="bars"
						onClick={toggle}
					>
						<Image
							src="/sidenavbar/menu.svg"
							width={30}
							height={30}
							alt="BARS"
						></Image>
					</div>
				</div>
				{menuItem.map((item, index) => (
					<Link href={item.path} key={index}>
						<span className="link">
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
						</span>
					</Link>
				))}
			</div>
			<main>{children}</main>
		</nav>
	);
}
