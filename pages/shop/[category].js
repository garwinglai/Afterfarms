import React, { useEffect, useRef, useState, useMemo } from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/css/shop/category.module.css";
import { useRouter } from "next/router";
import CategoryList from "../../components/shop/CategoryList";
import ShopPageHeader from "../../components/shop/ShopPageHeader";
import ShopMenu from "../../components/shop/ShopMenu";

// todo: get data to load page dynamically - using temp for now
import { produceCategoryData } from "../../data/tempProduceCategoryData";

function Category({ pageData }) {
	const [dynamicPageInfo, setDynamicPageInfo] = useState({
		title: "",
		slug: "",
		imgLink: "",
		categories: [],
	});
	const [addItems, setAddItems] = useState({
		items: {},
		itemCount: 0,
	});

	const { title, slug, categories, imgLink } = dynamicPageInfo;

	const router = useRouter();
	const categorySlug = router.query.category;

	const anchorRefs = useRef([]);

	useEffect(() => {
		// todo: get data to load page dynamically - using temp data
		setDynamicPageInfo(pageData[0]);
	}, [categorySlug, pageData]);

	function handleAddItems(item, itemCount) {
		setAddItems({ item, itemCount });
		console.log(addItems.itemCount);
	}

	return (
		<Layout page="shop">
			{/* <SideMenu page="shop" menuPage={categorySlug} categories={categories} anchor={anchorRefs}> */}
			<div className={styles.Category_container}>
				<ShopMenu
					menuPage={categorySlug}
					categories={categories}
					anchor={anchorRefs}
					style={{ position: "sticky", top: "0" }}
				/>
				<div className={styles.Category}>
					<ShopPageHeader
						categories={categories}
						menuPage={slug}
						anchor={anchorRefs}
						pageNav={title}
					/>

					<div className={styles.Category_title}>
						<img src={imgLink} alt={title} />
						<h1>{title}</h1>
						<p>{`(${categories.length} items)`}</p>
					</div>

					{/* //TODO: Map category list from data */}
					{categories.map((category, index) => {
						return (
							<CategoryList
								category={category}
								key={index}
								anchor={anchorRefs}
								i={index}
								handleItems={handleAddItems}
							/>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = produceCategoryData.map((data, i) => {
		return { params: { category: data.slug } };
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const slug = params.category;

	const pageData = produceCategoryData.filter((data) => data.slug === slug);

	return {
		props: { pageData },
	};
}

export default Category;

// todo: Use getStaticPaths & getStaticProps to load paths. The paths work, but it won't on reload, so must use getStaticPaths
