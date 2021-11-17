import React from "react";
import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
function ManageAccount() {
	return (
		<Layout page="account">
			<SideMenu menuPage="ManageAccount" page="account" anchor="undefined">
				<h1>Manage Account</h1>
			</SideMenu>
		</Layout>
	);
}

export default ManageAccount;
