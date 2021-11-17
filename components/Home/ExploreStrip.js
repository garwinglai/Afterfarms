import React from "react";
import explorestripcss from "../../styles/styleJsx/home/explore-strip-css";

function ExploreStrip() {
	return (
		<React.Fragment>
			<div className="sc-kNBZmU ibYXGK">
				<div>
					<h2 className="title-large desk-med">AfterFarms coming soon...</h2>
					<p className="body-small desk-med">
						Explore our guides on recipes, produce care, rewards, and more.
					</p>
					<div className="sc-eopZyb bLpfyh">
						<div className="sc-eNNmBn gZSoQN">
							<a
								href="https://blog.misfitsmarket.com/2019/08/29/how-to-freeze-your-misfit-produce/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="mobile"
									src="https://static.misfitsmarket.com/images/MM_home-LIP-post1-mobile.jpg"
									alt="Explore"
								/>
								<img
									className="desktop"
									src="https://static.misfitsmarket.com/images/MM_home-LIP-post1.jpg"
									alt="Explore"
								/>
								<p className="body-small desk-med">
									<b>Store Produce For Longer</b>
								</p>
							</a>
							<a
								href="https://blog.misfitsmarket.com/2021/01/29/bobby-flays-must-have-spices/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="mobile"
									src="https://static.misfitsmarket.com/images/MM_home-LIP-post2-mobile.jpg"
									alt="Explore"
								/>
								<img
									className="desktop"
									src="https://static.misfitsmarket.com/images/MM_home-LIP-post2.jpg"
									alt="Explore"
								/>
								<p className="body-small desk-med">
									<b>Honey Glazed Ham Recipe For This Christmas</b>
								</p>
							</a>
							<a
								href="https://blog.misfitsmarket.com/2021/02/24/universal-veggie-roasting-guide/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="mobile"
									src="https://static.misfitsmarket.com/images/MM_home-LIP-post3-mobile.jpg"
									alt="Explore"
								/>
								<img
									className="desktop"
									src="https://static.misfitsmarket.com/images/MM_home-LIP-post3.jpg"
									alt="Explore"
								/>
								<p className="body-small desk-med">
									<b>Member rewards &amp; more</b>
								</p>
							</a>
						</div>
					</div>
					<a
						id="visitOurBlog"
						href="https://blog.misfitsmarket.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="yellow-bg">Visit Our Blog</button>
					</a>
				</div>
			</div>
			<style jsx>{explorestripcss}</style>
		</React.Fragment>
	);
}

export default ExploreStrip;
