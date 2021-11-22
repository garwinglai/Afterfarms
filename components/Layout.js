import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import Footer2 from "./Footer2";

function Layout({ children, page }) {
	return (
		<React.Fragment>
			<Navbar page={page} />
			{children}
			<Footer2 />
			{/* <Footer /> */}
		</React.Fragment>
	);
}

export default Layout;
