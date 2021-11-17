import React, { useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import styles from "../../styles/css/shop/category.module.css";
import { useRouter } from "next/router";
import CategoryList from "../../components/shop/CategoryList";
import ShopPageHeader from "../../components/shop/ShopPageHeader";

// todo: get data to load page dynamically

function Category() {
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

	// * Temporary dynamic data
	// const categoryAnchor;

	useEffect(() => {
		// todo: get data to load page dynamically
	}, [categorySlug]);

	return (
		<Layout page="shop">
			<SideMenu page="shop" menuPage={categorySlug} anchor={categoryAnchor}>
				<div className={styles.Category}>
					<ShopPageHeader menuPage={categorySlug} anchor={categoryAnchor} />
					{/* //TODO: Map category list */}
					<CategoryList />
				</div>
				<h1 ref={anchorOneRef}>One</h1>
				<h2 ref={anchorTwoRef}>Two</h2>
				<h3 ref={anchorThreeRef}>There</h3>
			</SideMenu>
		</Layout>
	);
}

export default Category;

// todo: Use getStaticPaths & getStaticProps to load paths. The paths work, but it won't on reload, so must use getStaticPaths
