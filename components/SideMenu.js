import React from "react";
import styles from "../styles/css/account/sidemenu.module.css";
import Link from "next/link";

function SideMenu({ children, menuPage }) {
	// * TOP MENU Account PAGE **********************************************************************
	function showMenuTop() {
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
		<div className={styles.SideMenu}>
			<div className={`${styles.SideMenu_menuContainer}`}>
				<h3>My Account</h3>
				{showMenuTop()}
				{showMenuBottom()}
			</div>

			<div className={styles.SideMenu_pageContainer}>{children}</div>
		</div>
	);
}

export default SideMenu;
