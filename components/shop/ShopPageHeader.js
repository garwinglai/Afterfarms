import React, { useEffect, useState } from "react";
import styles from "../../styles/css/shop/shop-page-header.module.css";
import Link from "next/link";
let scrollToComponent;

function ShopPageHeader({ menuPage, anchor }) {
	// ! Temp Array of categories
	const categoryArrFruits = [
		"Non-organic",
		"organic",
		"organic",
		"organic",
		"organic",
		"organic",
		"organic",
		"organic",
	];
	const categoryArrVegetables = ["Leafy", "Greens"];

	const [isScroll, setIsScroll] = useState(false);
	const { anchorOneRef, anchorTwoRef, anchorThreeRef } = anchor;
	// let scrollToComponent;

	useEffect(() => {
		scrollToComponent = require("react-scroll-to-component");
		window.addEventListener("scroll", handleScroll);
		return window.removeEventListener("scroll", handleScroll);
	}, [anchor]);

	function handleScroll() {
		if (window.scrollY > 140) {
			setIsScroll(true);
		} else {
			setIsScroll(false);
		}
	}

	function handleCategoryClick(e, category) {
		if (category) {
			scrollToComponent(category.current, {
				offset: 150,
				align: "middle",
				duration: 100,
				ease: "inCirc",
			});
		}
	}

	return (
		<div className={styles.ShopPageHeader}>
			<div className={styles.ShopPageHeader_navigation}>
				<i className="fas fa-angle-left"></i>
				{console.log(isScroll)}
				<Link href="/shop">
					<a>shop</a>
				</Link>
				{/* //todo: conditional data fetch */}
				<p>/ Fruits</p>
			</div>
			{/* //todo: map data array for categories */}
			<div className={`${styles.ShopPageHeader_categories}`}>
				<p
					onClick={(e) => handleCategoryClick(e, anchorOneRef)}
					className={styles.Categories_title}
				>
					Non-Organic
				</p>
				<p
					onClick={(e) => handleCategoryClick(e, anchorTwoRef)}
					className={styles.Categories_title}
				>
					Organic
				</p>
				<p
					onClick={(e) => handleCategoryClick(e, anchorTwoRef)}
					className={styles.Categories_title}
				>
					Organic
				</p>
				<p
					onClick={(e) => handleCategoryClick(e, anchorTwoRef)}
					className={styles.Categories_title}
				>
					Organic
				</p>
				<p
					onClick={(e) => handleCategoryClick(e, anchorTwoRef)}
					className={styles.Categories_title}
				>
					Organic
				</p>
				<p
					onClick={(e) => handleCategoryClick(e, anchorTwoRef)}
					className={styles.Categories_title}
				>
					Organic
				</p>
			</div>
		</div>
	);
}

export default ShopPageHeader;
