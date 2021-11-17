import React from "react";
import sourcingstripcss from "../../styles/styleJsx/home/sourcing-strip-css";

function SourcingStrip() {
	return (
		<React.Fragment>
			<div className="sc-fkyLDJ gJhnqg">
				<div className="grid-2-max">
					<div className="text-container">
						<h2 className="title-large desk-medium">
							Why is our produce so affordable?
						</h2>
						<p className="body-small desk-med">
							We rescue fresh produce along the food supply chain. Each year,
							the United States alone wastes{" "}
							<b style={{ fontWeight: "900", color: "green" }}>up to 50% </b> of
							high-quality &amp; fresh food. <br /> <br />
							From farms to distributors, we take in fresh produce so that we
							can offer it to you at better prices while doing some good for our
							planet.
						</p>
					</div>
					<img
						className="desktop-image"
						src="/images/website/andrew_squash.jpeg"
						alt="Produce"
					/>
					{/* <div className="image-container">
						<img
							className="mobile"
							src="/images/website/beets.jpeg"
							alt="Produce"
						/>
					</div> */}
				</div>
				<img
					className="divider-blob divider-blob3 mobile"
					src="https://static.misfitsmarket.com/images/MM_home-LIP-funny-mobile.svg"
					alt="Content Divider"
				/>

				<img
					className="divider-blob divider-blob3 desktop"
					src="https://static.misfitsmarket.com/images/MM_home-LIP-funny-desktop.svg"
					alt="Content Divider"
				/>
			</div>
			<style jsx>{sourcingstripcss}</style>
		</React.Fragment>
	);
}

export default SourcingStrip;
