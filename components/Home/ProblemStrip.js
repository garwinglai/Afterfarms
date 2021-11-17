import React from "react";
import problemstripcss from "../../styles/styleJsx/home/problem-strip-css";

function ProblemStrip() {
	return (
		<React.Fragment>
			<div className="sc-jUpvKA jXiwEV tan-bg">
				<div className="grid-2-max">
					<div className="image-container">
						<img
							src="/images/website/food_waste_art.png"
							alt="too big, too small, a little offbeat, short-dated, superficial differences, out-of-date packaging"
						/>
					</div>
					<div className="description-container">
						<h1 className="title-large">Our Food Waste Problem</h1>
						<p className="body-small desk-med">
							Almost half the food is thrown out in the United States because it
							doesn&apos;t meet market standards of being pretty enough along with other
							reasons.
							<br /> <br /> Yet, almost{" "}
							<u style={{ fontWeight: "900", color: "green" }}>1 in 9</u>{" "}
							Americans are suffering from food insecurity (hunger). <br />{" "}
						</p>
					</div>
				</div>
			</div>
			<style jsx>{problemstripcss}</style>
		</React.Fragment>
	);
}

export default ProblemStrip;
