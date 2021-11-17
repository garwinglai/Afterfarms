import React from "react";
import subscribestripcss from "../../styles/styleJsx/home/subscribe-strip-css";
import AppleIcon from "@mui/icons-material/Apple";

// ---------------- CSS Is on Global Sheet ----------------
function SubscribeStrip() {
	return (
		<React.Fragment>
			<div className="sc-eEieub kYiPJi">
				{/* <img
					className="divider-blob divider-blob6 mobile"
					src="https://static.misfitsmarket.com/images/MM_home-LIP-signup-top-mobile3.svg"
					alt="Content Divider"
				/>
				<img
					className="divider-blob divider-blob6 desktop"
					src="https://static.misfitsmarket.com/images/MM_home-LIP-signup-top-desktop2.svg"
					alt="Content Divider"
				/> */}
				{/* <div className="green-bg bandaid mobile"></div> */}
				<div>
					<div className="form-container">
						<h1 className="title-medium">If you&apos;ve come this far...</h1>
						<p className="body-large">
							You&apos;ll likely enjoy our newsletter: recipes, produce tips,
							&amp; more.
						</p>
						<p className="body-small">
							Download our app to shop now. <br />
							Get your first box for $10!
						</p>

						<form
							name="iterable_optin"
							action="//links.iterable.com/lists/publicAddSubscriberForm?publicIdString=c291bac4-a0fd-49c8-884f-9f4d9a638ce7"
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
								placeholder="Your Email"
								aria-label="Your Email"
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
								aria-label="Zip Code"
								required=""
								// value=""
							/>
							<span className="body-xsmall">
								By providing your email address, you agree to our
								<a href="/terms-of-service">Terms of Service</a> and
								<a href="/privacy">Privacy Policy</a>.
							</span>
							<button className="yellow-bg" type="submit">
								Join Waitlist
							</button>
						</form>
						<button
							className="IOS__button"
							style={
								{
									// backgroundColor: "var(--black)",
								}
							}
						>
							<AppleIcon
								style={{ marginBottom: "5px", paddingRight: "10px" }}
							/>
							Download
						</button>
					</div>
				</div>
				<style jsx>{subscribestripcss}</style>
			</div>
		</React.Fragment>
	);
}

export default SubscribeStrip;
