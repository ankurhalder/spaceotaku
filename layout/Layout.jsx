import { Fragment } from "react";
import { SideNavbar, ChatBot, NavBar } from "@/container";
import { TwinklingStars } from "@/components";
import { IconMeta, CommonMeta } from "@/components";
function Layout({ children, isOpen, setIsOpen }) {
	return (
		<Fragment>
			<IconMeta></IconMeta>
			<CommonMeta></CommonMeta>
			<TwinklingStars></TwinklingStars>
			<NavBar></NavBar>
			{/* <SideNavbar isOpen={isOpen} setIsOpen={setIsOpen}></SideNavbar> */}
			<ChatBot></ChatBot>
			{children}
		</Fragment>
	);
}

export default Layout;
