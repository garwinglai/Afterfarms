import React, { useState } from "react";
import Layout from "../../components/Layout";
import InfoHeader from "../../components/InfoHeader";
import styles from "../../styles/css/referral.module.css";
import FloatingButton from "../../components/Home/FloatingButton";

function Referral() {
	const [pageHeader, setPageHeader] = useState({
		title: "Refer A Friend",
		headerDescription: "Refer a friend anytime!",
	});

	return (
		<React.Fragment>
			<Layout>
				<InfoHeader pageHeader={pageHeader}>Referral Page</InfoHeader>
				<div className={styles.Referral}>
					<img
						className={styles.Referral__icon}
						src="/images/website/friend_referral.jpeg"
						alt="referral"
					/>
					<p className="body-medium">
						If you&apos;re a member, you can refer a pal with your referral
						link! Once your buddy purchases their first box, both you and your
						friend will receive a free box on us!
					</p>
				</div>
				<FloatingButton />
			</Layout>
		</React.Fragment>
	);
}

export default Referral;
