import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/css/shop/shop.module.css";
import SideMenu from "../../components/SideMenu";

function Shop() {
	return (
		<Layout page="shop">
			<SideMenu menuPage="shop" page="shop" anchor="undefined">
				<div className={styles.Shop}>
					<h1>Our Picks</h1>
				</div>
			</SideMenu>
		</Layout>
	);
}

export default Shop;
