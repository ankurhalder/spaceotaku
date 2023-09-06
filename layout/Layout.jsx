import { Fragment } from "react";
import { SideNavbar } from "@/container";
import { TwinklingStars } from "@/components";
function Layout({ children }) {
	return (
		<Fragment>
			<TwinklingStars></TwinklingStars>
			<SideNavbar></SideNavbar>
			{children}
		</Fragment>
	);
}

export default Layout;
