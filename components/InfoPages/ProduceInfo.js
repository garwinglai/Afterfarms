import React from "react";
import styles from "../../styles/css/produceinfo.module.css";

function ProduceInfo() {
	return (
		<React.Fragment>
			<div className={styles.ProduceInfo}>
				<h1 className="title-medium">Fruits &amp; Vegetables</h1>
				<p className="body-medium">
					{" "}
					Currently we only source fresh fruits and vegetables. We will be
					expanding soon to rescue more healthy goods ranging from snacks to
					drinks.
					<br /> <br />
					We source our fresh produce weekly, and our members will have a first
					come first serve basis per week. Please sign up for a free membership
					to view our produce selection in detail.
				</p>
			</div>
		</React.Fragment>
	);
}

export default ProduceInfo;
