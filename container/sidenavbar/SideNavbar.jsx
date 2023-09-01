import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTh,
	faBars,
	faUserAlt,
	faChartBar,
	faCommentAlt,
	faShoppingBag,
	faTags,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const menuItem = [
		{
			path: "/",
			name: "Coming Soon",
			icon: faTh,
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: faUserAlt,
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: faChartBar,
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: faCommentAlt,
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: faShoppingBag,
		},
		{
			path: "/",
			name: "Coming Soon",
			icon: faTags,
		},
	];

	return (
		<nav className="container">
			<div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
				<div className="top_section">
					{/* <Image
						src="/SpaceOtaku.png"
						width={30}
						height={30}
						alt="LOGO"
					></Image> */}
					<h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
						Logo
					</h1>
					<div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
						<button onClick={toggle}>
							<FontAwesomeIcon icon={faBars} />
						</button>
					</div>
				</div>
				{menuItem.map((item, index) => (
					<Link href={item.path} key={index}>
						<span className="link">
							<div className="icon">
								<FontAwesomeIcon icon={item.icon} />
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
