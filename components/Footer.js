import React from "react";
import footercss from "../styles/styleJsx/footer-css";
import AppleIcon from "@mui/icons-material/Apple";
import Link from "next/link";

function Footer() {
	return (
		<React.Fragment>
			<div id="foot" className="sc-iwsKbI eJtMwv sticky-cta">
				<div>
					<div className="sc-gZMcBi hAUZpT">
						<p className="body-small">
							<b>Follow along </b>
							<a
								href="https://www.instagram.com/afterfarms/"
								target="_blank"
								rel="noopener noreferrer"
							>
								@AfterFarms
							</a>
						</p>
						<div>
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
					<div
						className="sc-gqjmRU cqyslx"
						style={{
							padding: "5px 15px 5px 15px",
							borderRadius: "15px",
						}}
					>
						<div>
							<Link href="/">
								<a>
									<img src="/images/logo/afterfarmslogo.png" alt="logo" />
								</a>
							</Link>
						</div>
						<p className="body-medium">
							{/* 🥦🥬🥕🍎🍆🥑 <br /> <br /> */}
							Leave your email. <br /> We&apos;ll reach out when
							we&apos;re ready!
							<br /> <br />
							{/* 🥦🥬🥕🍎🍆🥑 */}
						</p>

						<form
							name="iterable_optin"
							target="_blank"
							className="email footerContainer"
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
					<div className="sc-VigVT cbPXk">
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
						<a
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
						</a>
					</div>
					<div className="sc-jTzLTM dCTSlY">
						<div>
							<a style={{ padding: "12.5px 0 13px 0" }}>
								<b>How It Works</b>
							</a>
							<a className="body-small">
								<b>Our Produce</b>
							</a>
							<a className="body-small">
								<b>Where We Deliver</b>
							</a>
							<a className="body-small">
								<b>FAQs</b>
							</a>
							<br />
						</div>
						<div>
							<a className="body-small">
								<b>About Us</b>
							</a>
							<a className="body-small">
								<b>Our Packaging</b>
							</a>
							<a className="body-small">
								<b>Shipping</b>
							</a>
							<a className="body-small">
								<b>Refer Friends</b>
							</a>
							<br />
						</div>
						<div>
							<a className="body-small">
								<b>Contact Us</b>
							</a>
						</div>
					</div>
					<div className="download__IOS">
						{/* <p style={{ marginBottom: "0px" }}> 🥦🥬🥕🍎🍆🥑</p> */}
						<br />
						<p className="body-large" style={{ margin: "0" }}>
							<b>Get your first box for $10! </b>
							<br />
							<span className="green-text">Download</span> to shop now.
						</p>
						<br />
						{/* <p style={{ marginTop: "0px" }}> 🥦🥬🥕🍎🍆🥑</p> */}
						<button>
							<AppleIcon style={{ margin: "0", paddingRight: "10px" }} />
							Download
						</button>
					</div>
					<div className="sc-fjdhpX esQcyV body-xsmall text-right">
						<p>Copyright © AfterFarms. All rights reserved.</p>
						<a>Terms of Service</a> |<a>Privacy Policy</a> |
						<a>Do Not Sell My Information</a> |<a>California Privacy Notice</a>
					</div>
				</div>
			</div>
			<style jsx>{footercss}</style>
		</React.Fragment>
	);
}

export default Footer;
