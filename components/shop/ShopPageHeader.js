import React, { useEffect, useState } from "react";
import styles from "../../styles/css/shop/shop-page-header.module.css";
import Link from "next/link";
let scrollToComponent;

function ShopPageHeader({ categories, menuPage, anchor, pageNav }) {
	const [isSubMenu, setIsSubMenu] = useState({
		isOrganic: false,
		isNonOrganic: false,
		isLeafy: false,
		isBroccoli: false,
	});
	const [isScroll, setIsScroll] = useState(false);

	const { isOrganic, isNonOrganic, isBroccoli, isLeafy } = isSubMenu;
	const anchorRefs = anchor.current;

	// * Conditional Styling for fixed Mobile Category Buttons
	let fixedCategoryButtons = () => {
		if (isScroll) {
			return {
				position: "fixed",
				top: "0",
				backgroundColor: "var(--tan-bg)",
				zIndex: "1000",
				overflowX: "scroll",
				width: "100%",
				paddingTop: "10px",
				paddingBottom: "10px",
			};
		}
	};

	// * Conditional Styling for Submenu Buttons
	let subMenuStyle = (categoryName) => {
		switch (categoryName) {
			case "Non-organic fruits":
				if (isNonOrganic) {
					return {
						color: "var(--black)",
						backgroundColor: "var(--white)",
					};
				}
				break;
			case "Organic fruits":
				if (isOrganic) {
					return {
						color: "var(--black)",
						backgroundColor: "var(--white)",
					};
				}
				break;
			case "Leafy Greens":
				if (isLeafy) {
					return {
						color: "var(--black)",
						backgroundColor: "var(--white)",
					};
				}
				break;
			case "Broccoli, Cauliflower":
				if (isBroccoli) {
					return {
						color: "var(--black)",
						backgroundColor: "var(--white)",
					};
				}
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		scrollToComponent = require("react-scroll-to-component");
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [anchor]);

	// *Handles fixed category to top on scroll
	function handleScroll() {
		if (window.scrollY > 150) {
			setIsScroll(true);
		} else {
			setIsScroll(false);
		}
	}

	// *Scroll to each category on click
	function scrollToCategory(categoryName) {
		anchorRefs.map((anchor) => {
			if (anchor) {
				if (anchor.innerHTML === categoryName) {
					scrollToComponent(anchor, {
						offset: 150,
						align: "middle",
						duration: 100,
						ease: "inCirc",
					});
				}
			}
		});
	}

	function handleCategoryClick(e) {
		const { name } = e.target;
		scrollToCategory(name);

		// *Manage Active colors for submenu
		switch (name) {
			case "Non-organic fruits":
				setIsSubMenu({
					isOrganic: false,
					isNonOrganic: true,
					isBroccoli: false,
					isLeafy: false,
				});
				break;
			case "Organic fruits":
				setIsSubMenu({
					isOrganic: true,
					isNonOrganic: false,
					isBroccoli: false,
					isLeafy: false,
				});
				break;
			case "Broccoli, Cauliflower":
				setIsSubMenu({
					isOrganic: false,
					isNonOrganic: false,
					isBroccoli: true,
					isLeafy: false,
				});
				break;
			case "Leafy Greens":
				setIsSubMenu({
					isOrganic: false,
					isNonOrganic: false,
					isBroccoli: false,
					isLeafy: true,
				});
				break;

			default:
				setIsSubMenu({
					isOrganic: false,
					isNonOrganic: false,
					isBroccoli: false,
					isLeafy: false,
				});
				break;
		}
	}

	// * Mobile Horizontal Menu *************************************************************

	function showMobileHorizontalMenu(menuPageName) {
		switch (menuPageName) {
			case "fruits":
				return (
					<div
						className={styles.fixedCategoryButtons}
						style={fixedCategoryButtons()}
					>
						<div
							className={styles.ShopPageHeader_categoriesMobile}
							style={isScroll ? { margin: "0" } : undefined}
						>
							{categories.map((category, index) => {
								return (
									<a
										key={index}
										name={category.categoryTitle}
										onClick={handleCategoryClick}
										className={styles.Categories_title}
										style={subMenuStyle(category.categoryTitle)}
									>
										{category.categoryTitle}
									</a>
								);
							})}
						</div>
					</div>
				);

				break;
			case "vegetables":
				return (
					<div
						className={styles.fixedCategoryButtons}
						style={fixedCategoryButtons()}
					>
						<div
							className={styles.ShopPageHeader_categoriesMobile}
							style={isScroll ? { margin: "0" } : undefined}
						>
							{categories.map((category, index) => {
								return (
									<a
										key={index}
										name={category.categoryTitle}
										onClick={handleCategoryClick}
										className={styles.Categories_title}
										style={subMenuStyle(category.categoryTitle)}
									>
										{category.categoryTitle}
									</a>
								);
							})}
						</div>
					</div>
				);
				break;
			default:
				break;
		}
	}

	return (
		<div className={styles.ShopPageHeader}>
			<div className={styles.ShopPageHeader_navigation}>
				<i className="fas fa-angle-left"></i>
				<Link href="/shop">
					<a>shop</a>
				</Link>
				<p>/</p>
				{/* //todo: conditional data fetch */}
				<p>{pageNav}</p>
			</div>
			{/* //todo: map data array for categories */}
			{showMobileHorizontalMenu(menuPage)}
		</div>
	);
}

export default ShopPageHeader;
