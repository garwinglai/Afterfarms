import React from "react";
import bannertwocss from "../../styles/styleJsx/home/banner-two-css";

function Banner2() {
	return (
		<React.Fragment>
			<div className="Banner2">
				<div className="Banner2__Left">
					<h1 className="title-large">
						Quality Produce. <br /> Better Prices.
					</h1>
					<p className="body-medium">
						{" "}
						Enjoy fresh produce at
						<b
							className="red-text"
							style={{ fontWeight: "900", textDecoration: "underline" }}
						>
							{" "}
							up to 40% off
						</b>{" "}
						grocery store prices. <br />
						Delivered straight to your door.
					</p>
					<button className="GetStarted__Button">Get Started</button>
					<p style={{ fontSize: "13px" }}>
						*** Currently serving Los Angeles County only. Please enter your Zip
						to verify.
					</p>
				</div>
				<div className="Banner2__Right">
					<img src="/images/website/produce_bag_transparent_logo.png" alt="produce" />
				</div>
			</div>
			<style jsx>{bannertwocss}</style>
		</React.Fragment>
	);
}

export default Banner2;
