import { LtePlusMobiledataSharp } from "@mui/icons-material";
import React from "react";
import styles from "../../styles/css/shop/order-progress-bar.module.css";

function OrderProgressBar() {
	// *CSS for Progress Bar (dynamic)
	const progressBarBackStyle = {
		backgroundColor: "white",
		width: "100%",
		height: "10px",
		borderRadius: "25px",
	};

	const progressBarFrontstyle = {
		// backgroundColor: "var(--avocado-green)",
		backgroundColor: "##00b712b",
		backgroundImage: "linear-gradient(315deg, #00b712 0%, #5aff15 74%)",
		width: "20%",
		height: "10px",
		borderRadius: "25px",
	};

	return (
		<div className={styles.OrderProgressBar}>
			<div className={styles.ProgressBar_container}>
				<div className={styles.ProgressBar_back} style={progressBarBackStyle}>
					<div
						className={styles.ProgressBar_front}
						style={progressBarFrontstyle}
					></div>
				</div>
			</div>
			<div className={styles.Details}>
				<p>Have some paragraphs here:</p>
			</div>
		</div>
	);
}

export default OrderProgressBar;
