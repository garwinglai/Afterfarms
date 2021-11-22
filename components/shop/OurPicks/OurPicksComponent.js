import React, { useEffect } from "react";
import styles from "../../../styles/css/shop/our-picks/our-picks-component.module.css";
import OurPicksProductCard from "./OurPicksProductCard";

function OurPicksComponent({ idx, anchor, title }) {
	return (
		<div className={styles.OurPicksComponent}>
			<img
				className={styles.OurPicksComponent_img}
				src="/images/website/produce_banner.jpeg"
				alt="Produce Banner"
			/>
			<h2 ref={(ref) => (anchor.current[idx] = ref)}>{title}</h2>
			{/* //todo: map the number of product cards needed */}
			<OurPicksProductCard />
		</div>
	);
}

export async function getStaticProps() {
	return;
}

export default OurPicksComponent;
