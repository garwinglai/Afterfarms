import React from "react";
import membershipcss from "../../styles/styleJsx/home/membership-css";

function Membership() {
	return (
		<React.Fragment>
			<div className="sc-jdeSqf emlStN">
				<h2 className="title-xsmall mobile-small">
					$ave on your weekly grocery bill
				</h2>
				<div className="grid-2-max">
					<div className="grid-container">
						<div className="sc-cBrjTV NQDqT">
							<div className="sc-gGCbJM iWklMj product-card" id="productCard1">
								<img
									className="product-image"
									src="https://static.misfitsmarket.com/images/MM_home-products-avocado-mobile.jpg"
									alt="Product"
									// width="120"
									// height="120"
								/>
								<h4>
									<b>Organic Hass Avocados</b>
								</h4>
								<p className="red-text pct-off">
									<b>50% Off</b>
								</p>
							</div>
							<div
								className="sc-gGCbJM iWklMj product-card with-brand"
								id="productCard2"
							>
								<img
									className="product-image"
									src="https://static.misfitsmarket.com/images/MM_home-products-olive-oil2.jpg"
									alt="Product"
									width="120"
									height="120"
								/>
								<p>Italione</p>
								<h4>
									<b>Organic Extra Virgin Olive Oil, 25.5 Fl Oz</b>
								</h4>
								<p className="red-text pct-off">
									<b>44% Off</b>
								</p>
							</div>
							<div className="sc-gGCbJM iWklMj product-card" id="productCard3">
								<img
									className="product-image"
									src="https://static.misfitsmarket.com/images/MM_home-products-oranges2.jpg"
									alt="Product"
									width="120"
									height="120"
								/>
								<h4>
									<b>Organic Valencia Oranges</b>
								</h4>
								<p className="red-text pct-off">
									<b>67% Off</b>
								</p>
							</div>
							<div
								className="sc-gGCbJM iWklMj product-card with-brand"
								id="productCard4"
							>
								<img
									className="product-image"
									src="https://static.misfitsmarket.com/images/MM_home-products-waffles2.jpg"
									alt="Product"
									width="120"
									height="120"
								/>
								<p>Belgian Boys</p>
								<h4>
									<b>Butter Waffle Chips, 4.23 Oz</b>
								</h4>
								<p className="red-text pct-off">
									<b>50% Off</b>
								</p>
							</div>
							<div
								className="sc-gGCbJM iWklMj product-card with-brand"
								id="productCard5"
							>
								<img
									className="product-image"
									src="https://static.misfitsmarket.com/images/MM_home-products-kimnori2.jpg"
									alt="Product"
									width="120"
									height="120"
								/>
								<p>Kimnori</p>
								<h4>
									<b>Organic Seaweed Snacks, Sea Salt, 1.69 Oz (12 Ct)</b>
								</h4>
								<p className="red-text pct-off">
									<b>44% Off</b>
								</p>
							</div>
							<div className="sc-gGCbJM iWklMj product-card" id="productCard6">
								<img
									className="product-image"
									src="https://static.misfitsmarket.com/images/MM_home-products-zucchini2.jpg"
									alt="Product"
									width="120"
									height="120"
								/>
								<h4>
									<b>Organic Zucchini</b>
								</h4>
								<p className="red-text pct-off">
									<b>47% Off</b>
								</p>
							</div>
						</div>
					</div>
					<div>
						<img
							className="arrow-desktop desktop"
							src="https://static.misfitsmarket.com/images/MM_home-LIP-arrow-desktop.svg"
							alt="Arrow"
						/>
						<h2 className="title-large desk-small">
							$ave weekly on grocery bills
						</h2>
						<p className="body-medium">
							<b>
								Here&apos;s what your{" "}
								<span style={{ color: "green" }}>
									<b>FREE</b>
								</span>{" "}
								membership unlocks
							</b>
						</p>
						<ul className="sc-RbTVP dXDjoc">
							<li>
								Savings <b>of up to 40% off</b> of grocery store prices.
								(Somtimes more)
							</li>
							<li>Access to our freshly rescued produce delivered to you.</li>
							<li>
								Member rewards, discounts, perks &amp; more. (Surprise easter
								eggs)
							</li>
						</ul>
					</div>
				</div>
			</div>
			<style jsx>{membershipcss}</style>
		</React.Fragment>
	);
}

export default Membership;
