import React from "react";
import styles from "../../styles/css/shop/category-list.module.css";
import ProductCard from "./ProductCard";

function CategoryList({ category }) {
	const { categoryTitle, items } = category

	return (
		<div className={styles.CategoryList}>
			<h2>{categoryTitle}</h2>
			<div className={styles.Category_cardContainer}>
				{items.map((item, index) => {
					return <ProductCard item={item} key={index} />
				})}
			</div>
		</div>

	);
}

export default CategoryList;
