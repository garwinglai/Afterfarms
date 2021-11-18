import React, { useState } from "react";
import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import styles from "../../styles/css/account/dashboard.module.css";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import ShareIcon from "@mui/icons-material/Share";
import { useRouter } from "next/router";

// TODO: ---

function Dashboard() {
	// TODO: Get User Data + Shopping Window timing
	const [toggles, setToggles] = useState({
		isShoppingWindow: false,
		isLoading: false
	})

	const { isShoppingWindow, isLoading } = toggles

	const myName = "Garwing";
	const router = useRouter();

	// * Shop Now Navigation
	function handleShopNowClick() {
		router.push("/shop");
	}

	// * Delivery Information Card
	function showDeliveryInformation() {
		return (
			<div className={styles.Dashboard_shoppingInfo}>
				<div className={styles.ShoppingInfo_left}>
					<div className={styles.ShoppingInfo_nextDelivery}>
						<p>
							<b style={{ color: "black" }}>Next Delivery</b>
						</p>
						<p>Tues, date</p>
					</div>
					<div className={styles.ShoppingInfo_shoppingWindow}>
						<p>
							<b style={{ color: "black" }}>Shopping Window</b>
						</p>
						<p className={styles.ShoppingInfo_description}>
							Monday - Saturday
							<br /> Nov 1st (12AM) - Nov 8th (11:59PM)
						</p>
					</div>
					<div className={styles.ShoppingInfo_shoppingAvailability}>
						{isShoppingWindow ? (
							<h3 style={{ marginTop: "30px" }}>
								<u>
									<b style={{ color: "var(--avocado-green)" }}>
										You can shop now!
									</b>
								</u>
							</h3>
						) : (
							<p>Next shopping window in:</p>
						)}
						{isShoppingWindow === false && (
							<p>
								<b>
									{/* //TODO: Count Down Timer */}
									<u style={{ color: "black" }}>3d : 20hr : 22min : 29sec</u>
								</b>
							</p>
						)}
					</div>
				</div>
				<div className={styles.ShoppingInfo_right}>
					<p className={`body-xsmall`}>
						* You can view online store during your shopping window.
					</p>
					<p className={`body-xsmall`}>
						* Your card will only be charged if you ordered{" "}
						<u> a minimum of $30</u> at the end of your shopping window
					</p>
					{/* //TODO: Add to Calendar */}
					{isShoppingWindow ? (
						<button onClick={handleShopNowClick}>Shop Now</button>
					) : (
						<button>Add to Calendar</button>
					)}
				</div>
			</div>
		);
	}

	// * Misc Account Card Info

	function showMiscAccountCards() {
		return (
			<div className={styles.MiscContainer}>
				<div
					className={`${styles.MiscContainer_myCredits} ${styles.Misc_bodyContainers}`}
				>
					<h4>My Credits</h4>
					<div className={styles.body}>
						<div className={styles.body_title}>
							<h4 style={{ color: "var(--secondary-text)" }}>$0 Credits</h4>
							<i className="fas fa-dollar-sign"></i>
						</div>
						<p>
							Your credits you will show up here. You can earn credits through
							referrals, shopping, &amp; when we offer specials.
						</p>
						{/* //TODO: How to earn credit pop-up */}
						<a>How to earn credits</a>
					</div>
				</div>
				<div
					className={`${styles.MiscContainer_myOrders} ${styles.Misc_bodyContainers}`}
				>
					<h4>My Orders</h4>
					<div className={styles.body}>
						<ShoppingCartIcon
							className={`${styles.MuiIcon} ${styles.ShoppingCartIcon}`}
						/>
						<p>View &amp; manage your order history.</p>
						<button>My Orders</button>
					</div>
				</div>
				<div
					className={`${styles.MiscContainer_accountInfo} ${styles.Misc_bodyContainers}`}
				>
					<h4>Manage Account</h4>
					<div className={styles.body}>
						<SettingsIcon
							className={`${styles.MuiIcon} ${styles.SettingsIcon}`}
						/>
						<p>View &amp; manage your account information.</p>
						<button>Manage Account</button>
					</div>
				</div>
				<div
					className={`${styles.MiscContainer_referral} ${styles.Misc_bodyContainers}`}
				>
					<h4>Invite a Friend</h4>
					<div className={styles.body}>
						<ShareIcon className={`${styles.MuiIcon} ${styles.ShareIcon}`} />
						<p>
							Invite your friends, family, coworkers, neighbors, and anyone you
							like. They&apos;ll get started with $20 off their first box!
							You&apos;ll earn $20 off a future order for every sign-up.
						</p>
						<div className={styles.UserCode}>
							<p>
								<b style={{ color: "black" }}>
									https://afterfarms.com/user-code?=lawls
								</b>
							</p>
							{/* //TODO: Copy function to copy User Code */}
							<button>Copy</button>
						</div>
						<Link href="/account/referrals">
							<a>More ways to share &amp; earn credits</a>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	// * Help Center Cards
	function showHelpCenterCards() {
		return (
			<div className={styles.HelpCenterContainer}>
				<div className={styles.HowItWorks_container}>
					<h4>How it works</h4>
					<div className={styles.HelpCenter_bodyContainer}>
						<section>
							<i
								className="far fa-check-circle"
								style={{ color: "var(--avocado-yellow)" }}
							></i>
							<h5>Wait for shopping window</h5>
							<p>
								Your shopping window will be open every week from Monday 12am
								PST to Saturday 11:59pm PST.
							</p>
						</section>
						<section>
							<i
								className="fas fa-shopping-basket"
								style={{ color: "var(--avocado-green)" }}
							></i>
							<h5>Build your box</h5>
							<p>
								During your shopping window, you&apos;ll be able to view our
								member&apos;s only produce. We&apos;re constantly adding new rescued
								items, so check back frequently!
							</p>
						</section>
						<section>
							<i
								className="fas fa-cash-register"
								style={{ color: "var(--avocado-brown-dark)" }}
							></i>
							<h5>No need to checkout!</h5>
							<p>
								When your shopping window closes on Saturday 11:59pm PST, your
								card on file will be automatically charged. <br /> Please note:
								your card will not be charged unless you reach the{" "}
								<u>
									<b>$30 minimum</b>
								</u>
								.
							</p>
						</section>
					</div>
				</div>
				<div className={styles.NeedHelp_container}>
					<h4>Need Help?</h4>
					<div className={styles.NeedHelp_bodyContainer}>
						{/* //TODO: Image */}
						<Link href="/info/faqs">
							<a>Visit our FAQs</a>
						</Link>
						{/* //TODO: Help Center */}
						<Link href="/account/dashboard">
							<a>Visit our help center</a>
						</Link>
						{/* //TODO: Contact Us page */}
						<Link href="/account/dashboard">
							<a>Contact us</a>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<Layout page="account">
			<SideMenu menuPage="dashboard" page="account" anchor="undefined">
				<div className={styles.Dashboard}>
					<div className={styles.Dashboard_header}>
						<div className={styles.Header_left}>
							<h5>Welcome, {myName}!</h5>
							<h1>Dashboard</h1>
						</div>
					</div>
					<div className={styles.Dashboard_deliveryContainer}>
						<div className={styles.Delivery_title}>
							<h4>Schedule</h4>
							{isShoppingWindow ? (
								<button onClick={handleShopNowClick}>Shop Now</button>
							) : (
								<button
									style={{
										textDecoration: "line-through",
										backgroundColor: "transparent",
										pointerEvents: "none",
									}}
								>
									Shop Window
								</button>
							)}
						</div>
						{showDeliveryInformation()}
					</div>
					<div className={styles.Dashboard_miscAndHelpContainer}>
						{showMiscAccountCards()}
						{showHelpCenterCards()}
					</div>
				</div>
			</SideMenu>
		</Layout>
	);
}

export default Dashboard;
