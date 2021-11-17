import React from "react";
import benefitstripcss from "../../styles/styleJsx/home/benefits-strip-css";

function BenefitsStrip() {
	return (
		<React.Fragment>
			<div className="sc-jGxEUC hJWbPy">
				{/* BANNER DIVIDER */}
				<img
					className="divider-blob divider-blob1 mobile"
					src="https://static.misfitsmarket.com/images/MM_home-LIP-benefits-top-mobile2.svg"
					alt="Content Divider"
				/>
				<img
					className="divider-blob divider-blob1 desktop"
					src="https://static.misfitsmarket.com/images/MM_home-LIP-benefits-top-desktop2.svg"
					alt="Content Divider"
				/>
				{/* BANNER DIVIDER */}

				<div>
					<div className="grid-container">
						<div className="home2-section">
							<img
								className="icons"
								src="https://static.misfitsmarket.com/images/MM_home-LIP-savings.svg"
								alt="Save"
							/>
							<div>
								<h3 className="body-large icons">
									<b>Save Every Week</b>
								</h3>
								<p className="body-small">
									We rescue fresh produce from farms and distributors so that
									you can get better prices.
								</p>
							</div>
						</div>
						<div className="line"></div>
						<div className="home2-section">
							<img
								className="icons"
								src="https://static.misfitsmarket.com/images/MM_home-LIP-hassle.svg"
								alt="Shop"
							/>
							<div>
								<h3 className="body-large icons">
									<b>Save time</b>
								</h3>
								<p className="body-small">
									Order your groceries with a few clicks, and delivered straight
									to your door.
								</p>
							</div>
						</div>
						<div className="line"></div>
						<div className="home2-section">
							<img
								className="icons"
								src="https://static.misfitsmarket.com/images/MM_home-LIP-dogood.svg"
								alt="Do Good"
							/>
							<div>
								<h3 className="body-large icons">
									<b>Save your planet</b>
								</h3>
								<p className="body-small">
									Your <b className="green-text">FREE</b> membership gives you
									access to our rescued produce!
									<br />
									<br />
									Each order helps move us in the right direction of a
									sustainable planet!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{benefitstripcss}</style>
		</React.Fragment>
	);
}

export default BenefitsStrip;
