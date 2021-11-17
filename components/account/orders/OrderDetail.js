import React from "react";
import styles from "../../../styles/css/account/orders/component/order-detail.module.css";
import OrderLine from "./OrderLine";

function OrderDetail({ orderDetails, current, past }) {
	const { date, produce, total, deliveryFee } = orderDetails;

	// TODO: Fetch data for order details

	return (
		<div className={styles.OrderDetails}>
			<h3>Order Details</h3>
			<div className={styles.OrderDetails_container}>
				<div className={styles.OrderDetails_customerInfoContainer}>
					<div className={styles.CustomerInfo}>
						<h4>Garwing</h4>
						<p>
							<b style={{ color: "black" }}>Shipping Address:</b>
						</p>
						<p>603 W Camino Real Arcadia CA 91007</p>
						<p>
							<b style={{ color: "black" }}>Billing Address:</b>
						</p>
						<p>603 W Camino Real Arcadia CA 91007</p>
					</div>
					<div className={styles.BilledDates}>
						{/* //TODO: Date billed vs to be billed based on data */}
						<p>
							<b style={{ color: "black" }}>
								{current && "To Be Billed On:"}
								{past && "Dated billed:"}
							</b>{" "}
							<br />
							{date}
						</p>
					</div>
				</div>
				<div className={styles.OrderInfo}>
					<div className={styles.OrderInfo_headers}>
						<p className={styles.Header_one}>
							<b style={{ color: "black" }}>Qty</b>
						</p>
						<p className={styles.Header_two}>
							<b style={{ color: "black" }}>Item</b>
						</p>
						<p className={styles.Header_three}>
							<b style={{ color: "black" }}>Unit Price</b>
						</p>
						<p className={styles.Header_four}>
							<b style={{ color: "black" }}>Amount</b>
						</p>
					</div>

					{produce.map((item, index) => {
						return <OrderLine produceDetails={item} key={index} />;
					})}

					<div className={styles.OrderInfo_total}>
						<div className={styles.TotalFeeTitles}>
							<p>
								<b style={{ color: "black" }}>Tax:</b>
							</p>
							<p>
								<b style={{ color: "black" }}>Delivery:</b>
							</p>
							<p>
								<b style={{ color: "black" }}>Total:</b>
							</p>
						</div>
						<div className={styles.TotalFees}>
							<p>-</p>
							<p>{deliveryFee}</p>
							<p>{total}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderDetail;
