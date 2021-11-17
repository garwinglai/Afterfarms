import React from "react";
import footer2css from "../styles/styleJsx/footer-2-css";
import AppleIcon from "@mui/icons-material/Apple";
import Link from "next/link";

function Footer2() {
	return (
		<React.Fragment>
			<div className="Footer2 tan-bg">
				<div className="Footer2-instagram">
					<h1 className="title-medium">
						Follow along{" "}
						<a
							style={{ textDecoration: "none" }}
							href="https://www.instagram.com/afterfarms/"
						>
							@afterfarms
						</a>
					</h1>
					<div className="instagram-images">
						<div>
							<img
								src="/images/website/beets.jpeg"
								alt="Follow along @afterfarms"
							/>
						</div>
						<div>
							<img
								src="/images/website/berries.jpeg"
								alt="Follow along @afterfarms"
							/>
						</div>
						<div>
							<img
								src="/images/website/carrots.jpeg"
								alt="Follow along @afterfarms"
							/>
						</div>
						<div>
							<img
								src="/images/website/fruits_veggies.jpeg"
								alt="Follow along @afterfarms"
							/>
						</div>
						<div>
							<img
								src="/images/website/kale.jpeg"
								alt="Follow along @afterfarms"
							/>
						</div>
						<div>
							<img
								src="/images/website/radish.jpeg"
								alt="Follow along @afterfarms"
							/>
						</div>
					</div>
				</div>

				<div className="Footer2-info-container">
					<div className="info-links">
						<div className="links-container">
							<div className="info-link-one">
								<ul
									className="body-small"
									style={{
										listStyle: "none",
										paddingLeft: "0",
										// marginRight: "20px",
									}}
								>
									<Link href="/info/how-it-works">
										<a>How It Works</a>
									</Link>
									<Link href="/info/our-produce">
										<a>Our Produce</a>
									</Link>
									<Link href="/info/where-we-deliver">
										<a>Where We Deliver</a>
									</Link>
									<Link href="/info/faqs">
										<a>FAQs</a>
									</Link>
									<Link href="/info/about-us-our-mission">
										<a>About Us</a>
									</Link>
								</ul>
							</div>
							<div className="info-link-two">
								<ul
									className="body-small"
									style={{ listStyle: "none", paddingLeft: "0" }}
								>
									<Link href="/info/our-packaging">
										<a>Our Packaging</a>
									</Link>
									{/* <Link href="/info/shipping">
										<a>Shipping</a>
									</Link>
									<Link href="/info/contact-us">
										<a>Contact Us</a>
									</Link> */}
									<Link href="/info/referral">
										<a>Refer Friends</a>
									</Link>
								</ul>
							</div>
						</div>
						<div className="social-icons">
							<a
								href="https://www.instagram.com/afterfarms/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="https://static.misfitsmarket.com/images/MM_icon-instagram.svg"
									alt="instagram"
								/>
							</a>
							<a
								href="https://www.facebook.com/AfterFarms-102712275546104/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="https://static.misfitsmarket.com/images/MM_icon-facebook.svg"
									alt="facebook"
								/>
							</a>
							<a
								href="https://www.tiktok.com/@afterfarms"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="https://static.misfitsmarket.com/images/MM_icon-tiktok.svg"
									alt="tiktok"
								/>
							</a>
							{/* <a
								href="https://twitter.com/afterfarms"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="https://static.misfitsmarket.com/images/MM_icon-twitter.svg"
									alt="twitter"
								/>
							</a>
							<a
								href="https://www.youtube.com/channel/UCKuBayh9HPdX7UGrKqxsrKg"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="https://static.misfitsmarket.com/images/MM_icon-youtube.svg"
									alt="youtube"
								/>
							</a> */}
						</div>
					</div>
					<div className="download-ios">
						<div className="download-ios-container">
							<h4>Get your first box for $10!</h4>
							<h4>Download to shop now.</h4>
							<button className="download-ios-button">
								<AppleIcon
									style={{ marginBottom: "5px", paddingRight: "10px" }}
								/>
								Download
							</button>
						</div>
					</div>
					<div className="subscribe-form">
						<h4>Leave us your email.</h4>
						<h4>We&apos;ll reach out when we&apos;re ready!</h4>
						<form
							name="iterable_optin"
							target="_blank"
							// className="email footerContainer"
						>
							<input
								type="email"
								inputMode="email"
								autoCapitalize="off"
								autoCorrect="off"
								autoComplete="email"
								name="email"
								placeholder="Email"
								aria-label="Your email"
								required=""
								// value=""
							/>
							<input
								type="number"
								inputMode="decimal"
								pattern="[0-9]*"
								autoCorrect="off"
								autoComplete="postal-code"
								name="shipping_zip_code"
								placeholder="Zip Code"
								aria-label="Your zip code"
								required=""
								// value=""
							/>
							<button className="yellow-bg" type="submit">
								Sign Up
							</button>
							<p>
								By providing your email address, you agree to our
								<a href="/terms-of-service" target="_blank">
									{" "}
									Terms of Service{" "}
								</a>
								and{" "}
								<a href="/privacy" target="_blank">
									Privacy Policy
								</a>
								.
							</p>
						</form>
					</div>
					<img
						className="logo"
						src="/images/logo/afterfarmslogo.png"
						alt="logo"
						style={{ marginBottom: "30px" }}
					/>
				</div>
				<div className="body-xsmall copy-right">
					<p>Copyright © AfterFarms. All rights reserved.</p>
					<a>Terms of Service</a> |<a>Privacy Policy</a> |
					<a>Do Not Sell My Information</a> |<a>California Privacy Notice</a>
				</div>
			</div>
			<style jsx>{footer2css}</style>
		</React.Fragment>
	);
}

export default Footer2;
