import React, { forwardRef } from "react";
import styles from "../../styles/css/shop/category-list.module.css";
import ProductCard from "./ProductCard";

const CategoryList = (({ category, anchor, i, handleItems }) => {
	const { categoryTitle, items } = category

	return (
		<div className={styles.CategoryList}>
			<h2 ref={ref => anchor.current[i] = (ref)}>{categoryTitle}</h2>
			<div className={styles.Category_cardContainer}>
				{items.map((item, index) => {
					return <ProductCard item={item} key={index} handleItems={handleItems} />
				})}
			</div>
		</div>

	);
})

export default CategoryList;
