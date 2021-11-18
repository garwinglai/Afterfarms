import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import styles from "../../styles/css/shop/category.module.css";
import { useRouter } from "next/router";
import CategoryList from "../../components/shop/CategoryList";
import ShopPageHeader from "../../components/shop/ShopPageHeader";

// todo: get data to load page dynamically - using temp for now
import { produceCategoryData } from "../../data/tempProduceCategoryData"


function Category({ pageData }) {
	const [dynamicPageInfo, setDynamicPageInfo] = useState({
		title: "",
		categories: [],
	})

	const router = useRouter();
	const categorySlug = router.query.category;
	const anchorOneRef = useRef();
	const anchorTwoRef = useRef();
	const anchorThreeRef = useRef();

	const categoryAnchor = {
		anchorOneRef,
		anchorTwoRef,
		anchorThreeRef,
	};

	const { title, categories, imgLink } = dynamicPageInfo

	// * Temporary dynamic data
	// const categoryAnchor;

	useEffect(() => {
		// todo: get data to load page dynamically - using temp data
		setDynamicPageInfo(pageData[0])
	}, [categorySlug, pageData]);

	return (
		<Layout page="shop">
			<SideMenu page="shop" menuPage={categorySlug} anchor={categoryAnchor}>
				{console.log(title)}
				<div className={styles.Category}>
					<ShopPageHeader menuPage={categorySlug} anchor={categoryAnchor} pageNav={title} />

					<div className={styles.Category_title}>
						<img src={imgLink} alt={title} />
						<h1>{title}</h1>
						<p>{categories.length} items</p>
					</div>

					{/* //TODO: Map category list from data */}
					{categories.map((category, index) => {
						return <CategoryList category={category} key={index} />
					})}
				</div>
				{/* <h1 ref={anchorOneRef}>One</h1>
				<h2 ref={anchorTwoRef}>Two</h2>
				<h3 ref={anchorThreeRef}>There</h3> */}
			</SideMenu>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = produceCategoryData.map((data, i) => {
		return { params: { category: data.slug } }
	})

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const slug = params.category

	const pageData = produceCategoryData.filter((data) => data.slug === slug)

	return {
		props: { pageData }
	}
}

export default Category;

// todo: Use getStaticPaths & getStaticProps to load paths. The paths work, but it won't on reload, so must use getStaticPaths


