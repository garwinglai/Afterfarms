import React, { useState } from "react";
import bannercss from "../../styles/styleJsx/home/banner-css";
import { getZipCode } from "../../actions/auth/auth";
import { useRouter } from "next/dist/client/router";

function Banner() {
	const [waitListInfo, setWaitListInfo] = useState({
		email: "",
		zipCode: "",
	});

	const [showWaitListFalsePopUp, setShowWaitListFalsePopUp] = useState(false);
	const [showWaitListTruePopUp, setShowWaitListTruePopUp] = useState(false);

	const { email, zipCode } = waitListInfo;
	const router = useRouter();

	function handleInputChange(e) {
		const { name, value } = e.target;
		setWaitListInfo({ ...waitListInfo, [name]: value });
	}


	async function handleInputSubmit(e) {
		e.preventDefault();
		if (email === null || email === "" || zipCode === null || zipCode === "") {
			return;
		}
		const threeDigitZip = zipCode.slice(0, 3);
		let zipAvailable = await getZipCode(threeDigitZip);
		if (zipAvailable) {
			setShowWaitListTruePopUp(true);
		} else {
			setShowWaitListFalsePopUp(true);
		}
	}

	async function handleJoinWaitlist() {
		setShowWaitListTruePopUp(false);
		setShowWaitListFalsePopUp(false);
	}

	return (
		<React.Fragment>
			{showWaitListFalsePopUp && (
				<div className="PopUp">
					<h1
						className="body-medium title__x"
						onClick={() => setShowWaitListFalsePopUp(false)}
					>
						X
					</h1>
					<img
						src="https://cdn-icons.flaticon.com/png/128/3220/premium/3220855.png?token=exp=1636486621~hmac=a7aebb908639c0d66213a5d9c4137b24"
						alt="zip not available"
					/>
					<p className="title-xsmall">
						Awh, looks like we&apos;re not in your area yet.
						<br /> <br />
						Join the waitlist &amp; we&apos;ll reach out to you as soon as we
						are!
					</p>
					<p className="body-small">Email: {email}</p>
					<p className="body-small">Zip: {zipCode}</p>
					<button onClick={handleJoinWaitlist} name="join">
						Join
					</button>
				</div>
			)}
			{showWaitListTruePopUp && (
				<div className="PopUp">
					<h1
						className="body-medium title__x"
						onClick={() => setShowWaitListTruePopUp(false)}
					>
						X
					</h1>
					<img
						src="https://cdn-icons.flaticon.com/png/128/520/premium/520464.png?token=exp=1636487309~hmac=b0961f0d4f67fc59ac35a0804bcc0cae"
						alt="zip available"
					/>
					<p className="title-xsmall">
						Yay, looks like we serve your area!
						<br /> <br />
						Join the waitlist &amp; we&apos;ll reach out as soon as we&apos;re
						online!
					</p>
					<p className="body-small">Email: {email}</p>
					<p className="body-small">Zip: {zipCode}</p>
					<button onClick={handleJoinWaitlist}>Join</button>
				</div>
			)}
			<div className="sc-jqIZGH cwWcdd">
				<img
					className="mobile"
					src="/images/website/produce_table.jpeg"
					alt="Homepage"
				/>
			</div>
			<div className="sc-jMMfwr kyNtJm">
				<div className="grid-2-max">
					<div className="right-container">
						<h1 style={{ marginBottom: "15px" }} className="title-large title">
							Quality Produce & Better Prices
						</h1>
						<h3
							className="title-xsmall"
							style={{
								fontSize: "20px",
								marginTop: "0",
								color: "var(--secondary-text)",
								fontFamily: "Merriweather Sans, sans-serif",
							}}
						>
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
						</h3>
						<button className="GetStarted__Button">Get Started</button>
						<p style={{ fontSize: "13px" }}>
							*** Currently serving Los Angeles County only. Please enter your
							Zip to verify.
						</p>
					</div>
					<img src="/images/website/produce_table.jpeg" alt="produce" />
				</div>
			</div>

			<style jsx>{bannercss}</style>
		</React.Fragment>
	);
}

export default Banner;

//<div className="card__container">
//	//<div className="form__container">
//		<form onSubmit={handleInputSubmit}>
//			<input
//				onChange={handleInputChange}
//				type="email"
//				inputMode="email"
//				autoCapitalize="off"
//				autoCorrect="off"
//				autoComplete="email"
//				name="email"
//				placeholder="Email"
//				aria-label="Your email"
//				required=""
//				value={email}
//			/>
//			<input
//				onChange={handleInputChange}
//				type="number"
//				inputMode="decimal"
//				pattern="[0-9]*"
//				autoCorrect="off"
//				autoComplete="postal-code"
//				name="zipCode"
//				placeholder="Zip Code"
//				aria-label="Your zip code"
//				required=""
//				value={zipCode}
//			/>
//			<button id="getStartedHeader" className="yellow-bg">
//				Join Waitlist
//			</button>
//		</form>
//	</div>
//	<div className="divider">
//		{/* <h4>-</h4> */}
//		<h3>- OR -</h3>
//		{/* <h4>-</h4> */}
//	</div>
//	<div className="download__IOS">
//		<div>
//			<h5 style={{ margin: "0", fontSize: "16px" }}>
//				Get your first box for $10! <br />
//				Download to shop now.
//				<p
//					style={{
//						fontSize: "12px",
//						marginBottom: "0",
//						marginTop: "5px",
//					}}
//				>
//					***Limited Time Only
//				</p>
//			</h5>
//
//			<button style={{ margin: "0", marginTop: "10px" }}>
//				<AppleIcon style={{ marginBottom: "5px", paddingRight: "10px" }} />
//				Download
//			</button>
//		</div>
//	</div>
//</div>;
