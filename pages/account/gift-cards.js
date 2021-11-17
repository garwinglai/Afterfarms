import React from "react";
import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";

function GiftCards() {
	return (
		<Layout page="account">
			<SideMenu menuPage="GiftCards" page="account" anchor="undefined">
				<h1>Gift Cards</h1>
			</SideMenu>
		</Layout>
	);
}

export default GiftCards
