import { Fragment } from "react";
import { SideNavbar } from "@/container";
import { TwinklingStars } from "@/components";
import { IconMeta, CommonMeta } from "@/components";
function Layout({ children }) {
	return (
		<Fragment>
			<IconMeta></IconMeta>
			<CommonMeta></CommonMeta>
			<TwinklingStars></TwinklingStars>
			<SideNavbar></SideNavbar>
			{children}
		</Fragment>
	);
}

export default Layout;
