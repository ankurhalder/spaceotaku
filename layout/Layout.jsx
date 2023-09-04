import { Fragment } from "react";
import { SideNavbar } from "@/container";
function Layout({ children }) {
	return (
		<Fragment>
			<SideNavbar></SideNavbar>
			{children}
		</Fragment>
	);
}

export default Layout;
