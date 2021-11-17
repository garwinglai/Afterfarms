import React from "react";
import solutionstripcss from "../../styles/styleJsx/home/solution-strip-css";

function SolutionStrip() {
	return (
		<React.Fragment>
			<div className="sc-jdfcpN euzeWQ">
				<img
					className="divider-blob divider-blob4 yellow-bg mobile"
					src="https://static.misfitsmarket.com/images/MM_home-LIP-uglyprob-bottom-transparent-mobile.svg"
					alt="Content Divider"
				/>
				<img
					className="divider-blob divider-blob4 yellow-bg desktop"
					src="https://static.misfitsmarket.com/images/MM_home-LIP-uglyprob-bottom-transparent-desktop.svg"
					alt="Content Divider"
				/>
				<div>
					<div className="grid-container grid-2-max">
						<div>
							<h2 className="title-large desk-med">
								The funny-looking Solution
							</h2>
							<p className="body-small desk-med">
								Much of the produce that&apos;s wasted is actually still fresh
								and good to eat. However, traditional markets will rather let
								those produce go to waste because{" "}
								<b style={{ fontWeight: "900", color: "green" }}>
									ugly produce
								</b>{" "}
								doesn&apos;t look great on their shelves. <br /> <br />
								That&apos;s where we come in. We take in these produce so
								that we can offer them to you at better prices while taking
								caring of our planet (home).
							</p>
						</div>
						{/* <img
							className="mobile"
							src="https://static.misfitsmarket.com/images/MM_home-LIP-funnylooking-mobile2.jpg"
							alt="Produce"
						/> */}
						<img
							// className="desktop"
							src="/images/website/carrots.jpeg"
							alt="Produce"
						/>
					</div>
				</div>
			</div>
			<style jsx>{solutionstripcss}</style>
		</React.Fragment>
	);
}

export default SolutionStrip;
