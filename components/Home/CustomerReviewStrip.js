import React from "react";
import customerreviewstrip from "../../styles/styleJsx/home/customer-review-strip-css";

function CustomerReviewStrip() {
	return (
		<React.Fragment>
			<div className="sc-jRuhRL lnYkEj">
				<div>
					<div className="inner-container">
						<div className="image-container">
							<img
								className="say-it-better mobile"
								src="https://static.misfitsmarket.com/images/MM_home-LIP-UGC-title-mobile.svg"
								alt="We couldn't have said it better ourselves"
							/>
							<img
								className="say-it-better desktop"
								src="https://static.misfitsmarket.com/images/MM_home-LIP-UGC-title-desktop.svg"
								alt="We couldn't have said it better ourselves"
							/>
						</div>
						<div className="card-grid">
							<div className="ig-card">
								<img
									className="mobile"
									src="https://static.misfitsmarket.com/images/MM_home-LIP-ig2-mobile.jpg"
									alt="Home"
								/>
								{/* <img
									className="desktop"
									src="https://static.misfitsmarket.com/images/MM_home-ig-3.png"
									alt="Home"
								/> */}
								<div>
									<span>
										<img
											className="mobile"
											src="https://static.misfitsmarket.com/images/MM_home-LIP-parenthesis-mobile.svg"
											alt="Quote"
										/>
										<img
											className="desktop desktop-inline"
											src="https://static.misfitsmarket.com/images/MM_home-LIP-parenthesis-icon-desktop.svg"
											alt="Quote"
										/>
									</span>
									<p className="body-small">
										Wow. AfterFarms claims that their produce items can be up to
										40% off traditional grocery store prices. Well, it&apos;s
										true! I saved about $15 on my groceries this week. Highly
										recommend if you&apos;re looking for cheaper and fresh
										produce!!!
										<br />
										<br />
										<a
											href="https://www.instagram.com/p/CAk3oIpgeNi/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<b>@angvbeauty</b>
										</a>
									</p>
								</div>
							</div>
							<div className="ig-card">
								{/* <img
									className="mobile"
									src="https://static.misfitsmarket.com/images/MM_home-ig-2.png"
									alt="Home"
								/>
								<img
									className="desktop"
									src="https://static.misfitsmarket.com/images/MM_home-ig-2.png"
									alt="Home"
								/> */}
								<div>
									<span>
										<img
											className="mobile"
											src="https://static.misfitsmarket.com/images/MM_home-LIP-parenthesis-mobile.svg"
											alt="Quote"
										/>
										<img
											className="desktop desktop-inline"
											src="https://static.misfitsmarket.com/images/MM_home-LIP-parenthesis-icon-desktop.svg"
											alt="Quote"
										/>
									</span>
									<p className="body-small">
										This is my first time ordering groceries from AfterFarms,
										and I have to say, I was not disappointed. All of the
										produce came in fresh. I&apos;m Definitely super excited to
										try them soon 🥰
										<br />
										<br />
										<a
											href="https://www.instagram.com/p/CBjHnd8JTQB/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<b>@chefdavepalmer</b>
										</a>
									</p>
								</div>
							</div>

							<div className="ig-card">
								<img
									className="mobile"
									src="https://static.misfitsmarket.com/images/MM_home-LIP-ig3-mobile.jpg"
									alt="Home"
								/>
								{/* <img
									className="desktop"
									src="https://static.misfitsmarket.com/images/MM_home-ig-1.png"
									alt="Home"
								/> */}
								<div>
									<span>
										<img
											className="mobile"
											src="https://static.misfitsmarket.com/images/MM_home-LIP-parenthesis-mobile.svg"
											alt="Quote"
										/>
										<img
											className="desktop desktop-inline"
											src="https://static.misfitsmarket.com/images/MM_home-LIP-parenthesis-icon-desktop.svg"
											alt="Quote"
										/>
									</span>
									<p className="body-small">
										I was a bit scared at first to order groceries online.
										However, after I received my produce box from AfterFarms, I
										have no complaints. I would definitely continue ordering
										groceries from them!
										<br />
										<br />
										<a
											href="https://www.instagram.com/p/CAsyhZRFD92/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<b>@a1990powell</b>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img
					className="divider-blob divider-blob5 yellow-bg mobile"
					src="https://static.misfitsmarket.com/images/MM_home-LIP-explore-mobile.svg"
					alt="Content Divider"
				/>
				<img
					className="divider-blob divider-blob5 yellow-bg desktop"
					src="https://static.misfitsmarket.com/images/MM_home-LIP-explore-desktop.svg"
					alt="Content Divider"
				/>
			</div>
			<style jsx>{customerreviewstrip}</style>
		</React.Fragment>
	);
}

export default CustomerReviewStrip;
