import { Fragment } from "react";
// import { SideNavBar } from "@/container";
function Layout({ children }) {
	return (
		<Fragment>
			{/* <SideNavBar></SideNavBar> */}
			{children}
		</Fragment>
	);
}

export default Layout;
