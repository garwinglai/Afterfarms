import React from "react";
import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";

function Referrals() {
	return (
		<Layout page="account">
			<SideMenu menuPage="Referrals" page="account" anchor="undefined">
				<h1>Referrals</h1>
			</SideMenu>
		</Layout>
	);
}

export default Referrals;
