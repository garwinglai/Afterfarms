import React, { useRef } from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/css/shop/shop.module.css";
import ShopMenu from "../../components/shop/ShopMenu";
import OurPicksComponent from "../../components/shop/OurPicks/OurPicksComponent";

function Shop() {
	let testRef = useRef([]);

	const tempOurPicksArr = [1, 2, 3];
	const tempTitles = ["Best Sellers", "New Arrivals", "Seasonal"];

	console.log(tempOurPicksArr.length);

	return (
		<Layout page="shop">
			<div className={styles.Shop_container}>
				<ShopMenu menuPage="shop" anchor={testRef} />
				<div className={styles.Shop}>
					{tempOurPicksArr.map((pick, index) => {
						console.log(index);
						return (
							<OurPicksComponent
								key={index}
								idx={index}
								anchor={testRef}
								title={tempTitles[index]}
							/>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Shop;
