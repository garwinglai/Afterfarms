import React from "react";
import styles from "../../../styles/css/account/orders/component/order-line.module.css";

// todo: Fetch data for accurate info

function OrderLine({ produceDetails }) {
	const { quantity, title, price } = produceDetails;
	return (
		<div className={styles.ProduceDetails}>
			<p className={styles.Detail_one}>{quantity}</p>
			<p className={styles.Detail_two}>{title}</p>
			<p className={styles.Detail_three}>-</p>
			<p className={styles.Detail_four}>{price}</p>
		</div>
	);
}

export default OrderLine;
