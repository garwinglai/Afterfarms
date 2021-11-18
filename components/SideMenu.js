import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/css/account/sidemenu.module.css";
import Link from "next/link";
let scrollToComponent;
let pageContainerHeight;

function SideMenu({ children, menuPage, page, anchor, categories }) {
	const [isClicked, setIsClicked] = useState({
		isOrganic: false,
		isNonOrganic: false,
		isBroccoli: false,
		isLeafy: false,
	});
	const [isScroll, setIsScroll] = useState(true);
	const [currentAnchor, setCurrentAnchor] = useState(anchor.current)

	const { isOrganic, isNonOrganic, isBroccoli, isLeafy } = isClicked;

	let myRefPageContainer = useRef();
	let anchorRefs = anchor.current;

	// * Conditional Styling for Submenu Buttons
	let subMenuStyle = (categoryName) => {
		switch (categoryName) {
			case "Non-organic fruits":
				if (isNonOrganic) {
					return { color: "var(--green-text)" }
				}
				break;
			case "Organic fruits":
				if (isOrganic) {
					return { color: "var(--green-text)" }
				}
				break;
			case "Leafy Greens":
				if (isLeafy) {
					return { color: "var(--green-text)" }
				}
				break;
			case "Broccoli, Cauliflower":
				if (isBroccoli) {
					return { color: "var(--green-text)" }
				}
				break;
			default:
				break;
		}
	}

	useEffect(() => {
		scrollToComponent = require("react-scroll-to-component")
		window.addEventListener("scroll", handleScroll);
		pageContainerHeight = myRefPageContainer.current.clientHeight;
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isClicked, currentAnchor]);

	function handleScroll() {
		if (window.scrollY < pageContainerHeight + 300) {
			setIsScroll(true);
		} else {
			setIsScroll(false);
		}
	}

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
		})
	}

	// * HandleClick Scroll to Anchor *************************************************************
	function handleCategoryClick(e) {

		const { name } = e.target;
		scrollToCategory(name)

		// *Manage Active colors for submenu
		switch (name) {
			case "Non-organic fruits":
				setIsClicked({
					isOrganic: false,
					isNonOrganic: true,
					isBroccoli: false,
					isLeafy: false,
				});
				break;
			case "Organic fruits":
				setIsClicked({
					isOrganic: true,
					isNonOrganic: false,
					isBroccoli: false,
					isLeafy: false,
				});
				break;
			case "Broccoli, Cauliflower":
				setIsClicked({
					isOrganic: false,
					isNonOrganic: false,
					isBroccoli: true,
					isLeafy: false,
				});
				break;
			case "Leafy Greens":
				setIsClicked({
					isOrganic: false,
					isNonOrganic: false,
					isBroccoli: false,
					isLeafy: true,
				});
				break;

			default:
				setIsClicked({
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
			case "fruits":
				return (<menu className={styles.SideMenu_shop}>
					{categories.map((category, index) => {
						return <a key={index} name={category.categoryTitle} onClick={handleCategoryClick} style={subMenuStyle(category.categoryTitle)}>{category.categoryTitle}</a>
					})}
				</menu>
				);
				break;
			case "vegetables":
				return (<menu className={styles.SideMenu_shop}>
					{categories.map((category, index) => {
						return <a key={index} name={category.categoryTitle} onClick={handleCategoryClick} style={subMenuStyle(category.categoryTitle)}>{category.categoryTitle}</a>
					})}
				</menu>
				);
				break;

			default:
				return;
				break;
		}
	}

	// * Top Side Menu -----------------------------
	// * TOP MENU Account PAGE **********************************************************************
	function showMenuTop(pageName) {
		if (pageName === "account") {
			return (
				<menu className={styles.SideMenu_menuTop}>
					<Link href="/account/dashboard">
						<a
							className={styles.SideMenu_menuTopItem}
							style={
								menuPage === "dashboard"
									? { color: "var(--avocado-green)" }
									: { color: "black" }
							}
						>
							Dashboard
						</a>
					</Link>
					<Link href="/account/my-orders">
						<a
							className={styles.SideMenu_menuTopItem}
							style={
								menuPage === "MyOrders"
									? { color: "var(--avocado-green)" }
									: { color: "black" }
							}
						>
							My Orders
						</a>
					</Link>
					<Link href="/account/manage-account">
						<a
							className={styles.SideMenu_menuTopItem}
							style={
								menuPage === "ManageAccount"
									? { color: "var(--avocado-green)" }
									: { color: "black" }
							}
						>
							Manage Account
						</a>
					</Link>
					{/* //TODO: Page on notifications, side menu scrolls too far */}
					<Link href="/account/notifications">
						<a
							className={styles.SideMenu_menuTopItem}
							style={
								menuPage === "Notifications"
									? { color: "var(--avocado-green)" }
									: { color: "black" }
							}
						>
							Notifications
						</a>
					</Link>
				</menu>
			);

			// * TOP MENU SHOPPING PAGE **********************************************************************
		} else if (pageName === "shop") {
			return (
				<menu className={styles.SideMenu_menuTop}>
					<Link href="/shop">
						<a
							className={styles.SideMenu_menuTopItemShop}
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
					<Link href="/shop/fruits">
						<a
							// onClick={handleCategoryClick}
							className={styles.SideMenu_menuTopItemShop}
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
							className={styles.SideMenu_menuTopItemShop}
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
	}

	// * Bottom Side Menu Account Page ************************************************************
	function showMenuBottom() {
		return (
			<menu className={styles.SideMenu_menuBottom}>
				<Link href="/account/referrals">
					<a
						className={styles.SideMenu_menuTopItem}
						style={
							menuPage === "Referrals"
								? { color: "var(--avocado-green)" }
								: { color: "black" }
						}
					>
						Referrals
					</a>
				</Link>
				<Link href="/account/gift-cards">
					<a
						className={styles.SideMenu_menuTopItem}
						style={
							menuPage === "GiftCards"
								? { color: "var(--avocado-green)" }
								: { color: "black" }
						}
					>
						Gift Cards
					</a>
				</Link>
				{/* //TODO: Log Out Button */}
				<button>Log Out</button>
			</menu>
		);
	}

	return (

		<div className={styles.SideMenuLayout}>
			<div
				className={`${styles.SideMenu_menuContainer}`}
				style={page === "shop" ? isScroll ? { position: "fixed" } : { position: "absolute" } : undefined}
			>
				{page === "account" ? <h3>My Account</h3> : <h3>Menu</h3>}
				{showMenuTop(page)}
				{page === "account" && showMenuBottom()}
			</div>
			<div className={styles.SideMenu}>
				<div className={styles.SideMenu_menuTemplate}></div>
				<div
					ref={myRefPageContainer}
					className={styles.SideMenu_pageContainer}
					style={page === "shop" ? { backgroundColor: "white" } : undefined}
				>
					{children}
				</div>
			</div>
		</div>

	);
}

export default SideMenu;
