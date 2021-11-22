import React, { useEffect, useState } from "react";
import homecss from "../styles/styleJsx/navbar-css";
import Link from "next/link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import IconButton from "@mui/material/IconButton";
import ClickAwayListener from "@mui/core/ClickAwayListener";
import { infoData } from "../data/infoData";
import { useRouter } from "next/router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import OrderProgressBar from "./shop/OrderProgressBar";
import Cart from "./shop/Cart/Cart";
import ReactCSSTransitionGroup from "react-transition-group";

function Navbar({ page }) {
	const [showMenu, setShowMenu] = useState(false);
	const [isScroll, setIsScroll] = useState(false);
	const [showSignIn, setShowSignIn] = useState(false);
	const [isShoppingWindow, setIsShoppingWindow] = useState(true);
	const [showShoppingCart, setShowShoppingCart] = useState(false);

	const router = useRouter();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	function handleScroll() {
		if (window.scrollY > 50) {
			setIsScroll(true);
		} else {
			setIsScroll(false);
		}
	}

	function handleShopNowClick() {
		router.push("/shop");
	}

	function handleShoppingCartClick() {
		setShowShoppingCart(!showShoppingCart);
	}

	function navMenuButton(pageName) {
		switch (pageName) {
			case "account":
				return isShoppingWindow ? (
					<span>
						<button className="yellow-bg" onClick={handleShopNowClick}>
							Shop Now
						</button>
					</span>
				) : (
					<span>
						<button
							className="yellow-bg"
							style={{
								textDecoration: "line-through",
								textDecorationThickness: "3px",
								backgroundColor: "white",
								pointerEvents: "none",
							}}
						>
							Shop Window
						</button>
					</span>
				);
				break;
			case "shop":
				return (
					<span>
						<IconButton onClick={handleShoppingCartClick}>
							<ShoppingCartIcon color="default" />
						</IconButton>
					</span>
				);
				break;
			default:
				return (
					<span id="getStarted">
						<button className="yellow-bg">Join Waitlist</button>
					</span>
				);
				break;
		}
	}

	return (
		<>
			{/* //*Desktop html ----------------------------------------------------*/}{" "}
			<div
				id="navbar"
				className={
					isScroll
						? "sc-dxgOiQ bZyXsc homepage nav-down scroll"
						: "sc-dxgOiQ bZyXsc homepage nav-down"
				}
			>
				<div className="nav-menu">
					<div
						className="navbar__desktop"
						style={page === "shop" ? { paddingTop: "5px" } : undefined}
					>
						<div className="sc-kEYyzF kujEhO">
							<Link href="/">
								<a>
									<img
										src="/images/logo/afterfarmslogo.png"
										alt="Logo"
										style={{ width: "auto", height: "35px" }}
									/>
								</a>
							</Link>
						</div>
						<div className="left-items">
							<span className="sc-eNQAEJ fDProa">
								<a onClick={() => setShowMenu(true)}>
									<div>
										<b>About Us</b>
										<KeyboardArrowDownOutlinedIcon alt="Arrow" />
									</div>
								</a>
							</span>
							<img
								// id="divider"
								className="divider"
								src="https://static.misfitsmarket.com/images/MM_nav-divider.svg"
								alt="Divider"
							/>
							<a id="signIn" onClick={() => setShowSignIn(true)}>
								<AccountCircleOutlinedIcon
									alt="profile"
									style={{ color: "black" }}
								/>
								{page === "account" ? (
									<b className="sign-in">Hi, Garwing</b>
								) : (
									<b className="sign-in">Sign In</b>
								)}
							</a>
							{/* //TODO: page==="account" useEffect to get shopping window true/fase. */}
							{navMenuButton(page)}
						</div>
						{/* <OrderProgressBar /> */}
					</div>

					{/* //* Mobile html ----------------------------------------------------*/}
					<div className="navbar__mobile">
						<div id="burgerImage">
							<IconButton
								onClick={() => {
									setShowMenu(true);
								}}
							>
								<img
									src="https://static.misfitsmarket.com/images/MM_nav-menu.svg"
									alt="Menu"
								/>
							</IconButton>
						</div>
						<div className="sc-kEYyzF kujEhO">
							<Link href="/">
								<a>
									<img
										src="/images/logo/afterfarmslogo.png"
										style={{ width: "auto", height: "35px" }}
										alt="Logo"
									/>
								</a>
							</Link>
						</div>
						<div className="sc-kkGfuU dHqkDw">
							<IconButton onClick={() => setShowSignIn(true)}>
								<AccountCircleOutlinedIcon alt="profile" />
							</IconButton>
						</div>
					</div>
				</div>

				{/* //* Show more menu ------------------------------------------------ */}
				{showMenu && (
					<ClickAwayListener
						// className="click-away"
						onClickAway={() => setShowMenu(false)}
					>
						<div>
							<button
								onClick={() => setShowMenu(false)}
								style={{
									position: "absolute",
									top: "60px",
									border: "none",
									margin: "0",
									padding: "0",
									height: "0",
									widht: "0",
									textAlign: "left",
									fontFamily: "Merriweather Sans, sans-serif",
								}}
							>
								<div className="arrow-up"></div>
								<div className="menu">
									<Link href="/info/how-it-works" className="menu__links">
										<a>How it works</a>
									</Link>
									<Link href="/info/faqs" className="menu__links">
										<a>FAQs</a>
									</Link>
									{infoData.map((info, index) => {
										return (
											<Link
												href={`/info/${info.slug}`}
												key={index}
												className="menu__links"
											>
												<a>{info.title}</a>
											</Link>
										);
									})}
									{/* <Link href="/blogs">
										<a>Blog</a>
									</Link> */}
									<Link href="/info/referral" className="menu__links">
										<a>Refer A Friend</a>
									</Link>
								</div>
							</button>
						</div>
					</ClickAwayListener>
				)}
			</div>
			{/* //* Show Sign In ------------------------------------------------- */}
			{showSignIn && (
				<ClickAwayListener onClickAway={() => setShowSignIn(false)}>
					<div>
						<div className="arrow-up-2"></div>
						<div className="signInMenu">Please join waitlist.</div>
					</div>
				</ClickAwayListener>
			)}
			{/* //* Show Shopping Car ------------------------------------------------- */}
			{showShoppingCart && (
				<ClickAwayListener onClickAway={() => setShowShoppingCart(false)}>
					<div>
						<Cart closeCart={handleShoppingCartClick} />
					</div>
				</ClickAwayListener>
			)}
			<div className="sc-ckVGcZ dvMPLK" id="navHelper"></div>
			{/* Component External CSS */}
			<style jsx>{homecss}</style>
		</>
	);
}

export default Navbar;
