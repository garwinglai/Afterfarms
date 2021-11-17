import React, { useState } from "react";
import styles from "../../styles/css/howitworks.module.css";
import InfoHeader from "../../components/InfoHeader";
import FloatingButton from "../../components/Home/FloatingButton";
import Layout from "../../components/Layout";
import Link from "next/link";

function HowItWorks() {
	const [pageHeader, setPageHeader] = useState({
		title: "How It Works",
		headerDescription: "4 Simple Steps.",
	});

	return (
		<Layout>
			<InfoHeader pageHeader={pageHeader} />
			<div className={styles.pageHeader}>
				<div className={styles.pageHeader__section}>
					<div className={styles.pageHeader__section__title}>
						<i className={`fas fa-carrot ${styles.pageHeader__icon}`}></i>
						<h3 className={`body-large ${styles.pageHeader__h3}`}>
							<b>
								Sign up for a <span style={{ color: "green" }}> FREE </span>{" "}
								membership.
							</b>
						</h3>
					</div>
					<div>
						<p className="body-small">
							Your free membership will provide you access to our discounted
							produce, member rewards, & more.
							<br />
							<br />
							<b className="green-text">
								Our members typically save an average of $21.49 each week.
							</b>{" "}
						</p>
					</div>
				</div>
				<div className="line"></div>
				<div className={styles.pageHeader__section}>
					<div className={styles.pageHeader__section__title}>
						<i className={`fas fa-carrot ${styles.pageHeader__icon}`}></i>
						<h3 className={`body-large ${styles.pageHeader__h3}`}>
							<b>Shop online.</b>
						</h3>
					</div>
					<div>
						<p className="body-small">
							You will be able to shop during your shopping window every Monday
							to Saturday.
							<br /> <br /> When your shopping window closes on Saturday, your
							order will be submitted and your card will be charged. <br />{" "}
							<br /> Delivery will occur the following Monday. If you did not
							place an order, your card will not be charged.
						</p>
					</div>
				</div>
				<div className="line"></div>
				<div className={styles.pageHeader__section}>
					<div className={styles.pageHeader__section__title}>
						<i className={`fas fa-carrot ${styles.pageHeader__icon}`}></i>
						<h3 className={`body-large ${styles.pageHeader__h3}`}>
							<b>Save your planet while you enjoy your meal!</b>
						</h3>
					</div>
					<div>
						<p className="body-small">
							Each order helps our society move towards preserving our planet
							for future generations. <br /> <br /> How does it feel to make the
							world a better place each time you have a meal?
						</p>
					</div>
				</div>
				<div className={styles.pageHeader__section}>
					<div className={styles.pageHeader__section__title}>
						<i className={`fas fa-carrot ${styles.pageHeader__icon}`}></i>
						<h3 className={`body-large ${styles.pageHeader__h3}`}>
							<b>
								Share your referral link &amp; get your next box{" "}
								<span style={{ color: "green" }}> FREE </span>
							</b>
						</h3>
					</div>
					<div>
						<p className="body-small">
							Share your link with a pal! Both you and your friend will receive
							your next box free. <br /> <br /> Now, you can save the world in
							double time! <br /> <br />
							<Link href="/info/referral">
								<a>Refer a friend!</a>
							</Link>
						</p>
					</div>
				</div>
			</div>
			<FloatingButton />
		</Layout>
	);
}

export default HowItWorks;
