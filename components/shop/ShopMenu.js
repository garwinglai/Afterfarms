import React, { useState, useEffect } from "react";
import styles from "../../styles/css/shop/shop-menu.module.css";
import Link from "next/link";
let reactScrollToComponent;

function ShopMenu({ menuPage, categories, anchor }) {
	const [isSubMenuClicked, setIsSubMenuClicked] = useState({
		isOrganic: false,
		isNonOrganic: false,
		isBroccoli: false,
		isLeafy: false,
	});

	const { isOrganic, isNonOrganic, isBroccoli, isLeafy } = isSubMenuClicked;

	let anchorRefs = anchor.current;

	// * Conditional Styling for Submenu Buttons
	let subMenuStyle = (categoryName) => {
		switch (categoryName) {
			case "Non-organic fruits":
				if (isNonOrganic) {
					return { color: "var(--green-text)" };
				}
				break;
			case "Organic fruits":
				if (isOrganic) {
					return { color: "var(--green-text)" };
				}
				break;
			case "Leafy Greens":
				if (isLeafy) {
					return { color: "var(--green-text)" };
				}
				break;
			case "Broccoli, Cauliflower":
				if (isBroccoli) {
					return { color: "var(--green-text)" };
				}
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		reactScrollToComponent = require("react-scroll-to-component");
	}, []);

	function scrollToCategory(categoryName) {
		if (anchorRefs) {
			anchorRefs.map((anchor) => {
				if (anchor) {
					if (anchor.innerHTML === categoryName) {
						reactScrollToComponent(anchor, {
							offset: 150,
							align: "middle",
							duration: 100,
							ease: "inCirc",
						});
					}
				}
			});
		}
	}

	function handleCategoryClick(e) {
		const { name } = e.target;
		scrollToCategory(name);

		switch (name) {
			case "Non-organic fruits":
				setIsSubMenuClicked({
					isOrganic: false,
					isNonOrganic: true,
					isBroccoli: false,
					isLeafy: false,
				});
				break;
			case "Organic fruits":
				setIsSubMenuClicked({
					isOrganic: true,
					isNonOrganic: false,
					isBroccoli: false,
					isLeafy: false,
				});
				break;
			case "Broccoli, Cauliflower":
				setIsSubMenuClicked({
					isOrganic: false,
					isNonOrganic: false,
					isBroccoli: true,
					isLeafy: false,
				});
				break;
			case "Leafy Greens":
				setIsSubMenuClicked({
					isOrganic: false,
					isNonOrganic: false,
					isBroccoli: false,
					isLeafy: true,
				});
				break;

			default:
				setIsSubMenuClicked({
					isOrganic: false,
					isNonOrganic: false,
					isBroccoli: false,
					isLeafy: false,
				});
				break;
		}
	}

	// * SubProduce Menu **********************************************************************
	function showSubProduceMenu(menuPage) {
		switch (menuPage) {
			case "shop":
				return (
					<menu className={styles.ShopMenu_subMenu}>
						<a name="Best Sellers" onClick={handleCategoryClick}>
							Best Sellers
						</a>
						<a name="New Arrivals" onClick={handleCategoryClick}>
							New Arrivals
						</a>
						<a name="Seasonal" onClick={handleCategoryClick}>
							Seasonal
						</a>
					</menu>
				);
				break;
			case "fruits":
				return (
					<menu className={styles.ShopMenu_subMenu}>
						{categories.map((category, index) => {
							return (
								<a
									key={index}
									name={category.categoryTitle}
									onClick={handleCategoryClick}
									className={styles.ShopMenu_subMenuItem}
									style={subMenuStyle(category.categoryTitle)}
								>
									{category.categoryTitle}
								</a>
							);
						})}
					</menu>
				);
				break;
			case "vegetables":
				return (
					<menu className={styles.ShopMenu_subMenu}>
						{categories.map((category, index) => {
							return (
								<a
									key={index}
									name={category.categoryTitle}
									onClick={handleCategoryClick}
									className={styles.ShopMenu_subMenuItem}
									style={subMenuStyle(category.categoryTitle)}
								>
									{category.categoryTitle}
								</a>
							);
						})}
					</menu>
				);
				break;

			default:
				return;
				break;
		}
	}

	// * TOP MENU  **********************************************************************
	function showShopMenu(menuPage) {
		return (
			<menu className={styles.ShopMenu_menuTop}>
				<Link href="/shop">
					<a
						className={styles.ShopMenu_menuTopItem}
						style={
							menuPage === "shop"
								? {
										color: "var(--avocado-green-dark)",
										textDecoration: "underline",
								  }
								: { color: "var(--gray-text)" }
						}
					>
						Our Picks
					</a>
				</Link>
				{menuPage === "shop" && showSubProduceMenu(menuPage)}
				<Link href="/shop/fruits">
					<a
						// onClick={handleCategoryClick}
						className={styles.ShopMenu_menuTopItem}
						style={
							menuPage === "fruits"
								? {
										color: "var(--avocado-green-dark)",
										textDecoration: "underline",
								  }
								: { color: "var(--gray-text)" }
						}
					>
						Fruits
					</a>
				</Link>
				{menuPage === "fruits" && showSubProduceMenu(menuPage)}
				<Link href="/shop/vegetables">
					<a
						// onClick={handleCategoryClick}
						className={styles.ShopMenu_menuTopItem}
						style={
							menuPage === "vegetables"
								? {
										color: "var(--avocado-green-dark)",
										textDecoration: "underline",
								  }
								: { color: "var(--gray-text)" }
						}
					>
						Vegetables
					</a>
				</Link>
				{menuPage === "vegetables" && showSubProduceMenu(menuPage)}
			</menu>
		);
	}

	return (
		<div className={styles.ShopMenu}>
			<div className={styles.ShopMenu_container}>
				<h1>Menu</h1>
				{showShopMenu(menuPage)}
			</div>
		</div>
	);
}

export default ShopMenu;
