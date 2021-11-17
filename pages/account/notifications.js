import React, { useState } from "react";
import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";
import styles from "../../styles/css/account/notifications.module.css";
import Checkbox from "@mui/material/Checkbox";

function Notifications() {
	const [isToggle, setIsToggle] = useState({
		toggle1: false,
		toggle2: false,
		toggle3: false,
	});

	const { toggle1, toggle2, toggle3 } = isToggle;

	function handelToggle(e) {
		const { name, checked } = e.target;
		console.log(name, checked);
		setIsToggle({ ...isToggle, [name]: checked });
	}

	//Todo: Fetch notification from database to update when component mount from isToggle and unsubscribe checkbox using UseEffect

	return (
		<Layout page="account">
			<SideMenu menuPage="Notifications" page="account" anchor="undefined">
				<div className={styles.Notifications}>
					<h1>Manage Notifications</h1>
					<p className={styles.Notifications_email}>
						Emails sent to: garwinglai@gmail.com
					</p>
					<div className={styles.Notifications_container}>
						<div className={styles.Notification_panel}>
							<div className={styles.Panel_description}>
								<h4>Newsletter</h4>
								<p>
									Read up on our special recipes, updates, and tips to handle
									produce.{" "}
								</p>
							</div>
							<input
								type="checkbox"
								id="switch1"
								name="toggle1"
								className={styles.Checkbox}
								onChange={handelToggle}
								value={toggle1}
							/>
							<label htmlFor="switch1" className={styles.Toggle} />
						</div>
						<div className={styles.Notification_panel}>
							<div className={styles.Panel_description}>
								<h4>New Arrivals and sneak peeks</h4>
								<p>
									Be the first to see our new arrivals &amp; seasonal offers.
								</p>
							</div>
							<input
								type="checkbox"
								id="switch2"
								name="toggle2"
								className={styles.Checkbox}
								onChange={handelToggle}
								value={toggle2}
							/>
							<label htmlFor="switch2" className={styles.Toggle} />
						</div>
						<div className={styles.Notification_panel}>
							<div className={styles.Panel_description}>
								<h4>Discounts and promotions</h4>
								<p>Receive our special offers for members only.</p>
							</div>
							<input
								type="checkbox"
								id="switch3"
								name="toggle3"
								className={styles.Checkbox}
								onChange={handelToggle}
								value={toggle3}
							/>
							<label htmlFor="switch3" className={styles.Toggle} />
						</div>
					</div>
				</div>
			</SideMenu>
		</Layout>
	);
}

export default Notifications;
