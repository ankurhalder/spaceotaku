import { motion } from "framer-motion";
import {
	AccountCircleRounded,
	AssignmentTurnedInRounded,
	AttachMoneyRounded,
	BarChartRounded,
	ColorLensRounded,
	DashboardRounded,
	SettingsRemoteRounded,
	TocRounded,
} from "@material-ui/icons";
import Item from "./items";
import { useState } from "react";
import Image from "next/image";
export default function SideBar() {
	const [open, setOpen] = useState(true);
	const handleToggle = () => {
		setOpen(!open);
	};
	const sideContainerVariants = {
		true: {
			width: "15rem",
		},
		false: {
			transition: {
				delay: 0.6,
			},
		},
	};

	const sidebarVariants = {
		true: {},
		false: {
			width: "3rem",
			transition: {
				delay: 0.4,
			},
		},
	};

	const profileVariants = {
		true: {
			alignSelf: "center",
			width: "4rem",
		},
		false: {
			alignSelf: "flex-start",
			marginTop: "2rem",
			width: "3rem",
		},
	};
	return (
		<motion.div
			data-Open={open}
			variants={sideContainerVariants}
			initial={`${open}`}
			animate={`${open}`}
			className="sidebar_container"
		>
			{/* sidebar div */}
			<motion.div
				className="sidebar"
				initial={`${open}`}
				animate={`${open}`}
				variants={sidebarVariants}
			>
				{/* lines_icon */}
				<motion.div
					whileHover={{
						scale: 1.2,
						rotate: 180,
						backgroundColor: "rgba(255, 255, 255, 0.3)",
						backdropFilter: "blur(3.5px)",
						WebkitBackdropFilter: "blur(3.5px)",
						border: "1px solid rgba( 255, 255, 255, 0.18 )",
						transition: {
							delay: 0.2,
							duration: 0.4,
						},
					}}
					onClick={handleToggle}
					className="lines_icon"
				>
					<TocRounded />
				</motion.div>
				{/* profile */}
				<motion.div
					layout
					initial={`${open}`}
					animate={`${open}`}
					variants={profileVariants}
					className="profile"
					transition={{ duration: 0.4 }}
					whileHover={{
						backgroundColor: "rgba(255, 255, 255, 0.3)",
						boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
						backdropFilter: "blur(5.5px)",
						WebkitBackdropFilter: "blur(5.5px)",
						border: "1px solid rgba( 255, 255, 255, 0.18 )",
						cursor: "pointer",
					}}
				>
					{/* <img
						src="https://ae01.alicdn.com/kf/H5be6a0fa5f584a8a8420da2a7d4bc809r/RBRARE-Polaroid-Men-s-Goggle-Driving-Sunglasses-Men-Classic-Low-Profile-Sun-Glasses-For-Men-High.jpg"
						alt="profile_img"
					/> */}
					<Image
						src="/SpaceOtaku.png"
						width={30}
						height={30}
						alt="LOGO"
					></Image>
				</motion.div>
				{/* groups */}
				<div className="groups">
					{/* group 1 */}
					<div className="group">
						<motion.h3
							animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
						>
							ANALYTICS
						</motion.h3>
						<Item icon={<DashboardRounded />} name="Dashboard" />
						<Item icon={<BarChartRounded />} name="Performance" />
					</div>
				</div>
				{/* group 2 */}
				<div className="group">
					<motion.h3
						animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
					>
						Content
					</motion.h3>
					<Item icon={<AttachMoneyRounded />} name="Sales" />
					<Item icon={<AssignmentTurnedInRounded />} name="Checklist" />{" "}
					<Item icon={<AccountCircleRounded />} name="Customers" />
				</div>
				{/* group 3 */}
				<div className="group">
					<motion.h3
						animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
					>
						CUSTOMIZATION
					</motion.h3>
					<Item icon={<SettingsRemoteRounded />} name="Segments" />
					<Item icon={<ColorLensRounded />} name="Themems" />
				</div>
			</motion.div>
		</motion.div>
	);
}
