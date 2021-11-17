import React, { useState } from "react";
import styles from "../../../styles/css/account/orders/component/order-card-component.module.css";
import OrderDetail from "./OrderDetail";
import SkipOrder from "./SkipOrder";

function OrderCard({ order, current, past, future, viewOrder }) {
	const [isViewPastOrderDetail, setIsViewPastOrderDetail] = useState(false);
	const [isViewFutureSkipOrder, setIsViewFutureSkipOrder] = useState(false);
	const [isViewCurrentOrder, setIsViewCurrentOrder] = useState(false);
	const [orderDetails, setOrderDetails] = useState({});
	const [isConfirmSkip, setIsConfirmSkip] = useState(false);

	function handleViewOrderClick(e, item) {
		e.preventDefault();

		const { name, value } = e.target;

		switch (name) {
			case "currentButton":
				// router.push(`/account/my-orders/${order.date}`);
				// TODO: send back actual current order to fetch order
				viewOrder(value);
				setIsViewCurrentOrder(!isViewCurrentOrder);
				break;
			case "pastButton":
				// router.push(`/account/my-orders/${value}`);
				setOrderDetails(item);
				setIsViewPastOrderDetail(!isViewPastOrderDetail);

				break;
			// TODO: Add skip from database to preserve skipped info
			case "futureButton":
				if (isConfirmSkip) {
					setIsConfirmSkip(false);
				} else {
					setIsViewFutureSkipOrder(!isViewFutureSkipOrder);
				}
				break;

			default:
				break;
		}
	}

	function card() {
		if (current) {
			if (order.date) {
				return (
					<div className={styles.OrderCard}>
						<h5>{order.date}</h5>
						<button
							name="currentButton"
							onClick={handleViewOrderClick}
							value={order}
						>
							{isViewCurrentOrder ? "Close" : "View"}
						</button>
					</div>
				);
			} else {
				return <p>You do not have any current orders.</p>;
			}
		}

		if (past) {
			return (
				<div className={`${styles.OrderCard} ${styles.PastOrderCard}`}>
					<h5>{order.date}</h5>
					<button
						name="pastButton"
						// value={item.date}
						onClick={(e) => handleViewOrderClick(e, order)}
					>
						{isViewPastOrderDetail ? "Close" : "View"}
					</button>
				</div>
			);
		}

		if (future) {
			return (
				<div className={`${styles.OrderCard} ${styles.FutureOrderCard}`}>
					<div>
						{isConfirmSkip && (
							<h5 style={{ color: "var(--avocado-brown-dark)" }}>(Skipped)</h5>
						)}
						<h5
							style={
								isConfirmSkip
									? {
											textDecoration: "line-through",
											textDecorationThickness: "3px",
									  }
									: {}
							}
						>
							{order.date}
						</h5>
						<p>To be billed on Nov 12th</p>
					</div>

					<button
						name="futureButton"
						onClick={handleViewOrderClick}
						value={order}
						style={isConfirmSkip ? { backgroundColor: "var(--green-bg)" } : {}}
					>
						{isConfirmSkip ? "Unskip" : "Manage"}
					</button>
				</div>
			);
		}
	}

	function handleManageSkipOrder() {
		setIsViewFutureSkipOrder(false);
	}

	function handleSkippedOrder() {
		setIsConfirmSkip(true);
	}

	return (
		<React.Fragment>
			{card()}{" "}
			{isViewFutureSkipOrder && (
				<SkipOrder
					manageView={handleManageSkipOrder}
					skipOrder={handleSkippedOrder}
				/>
			)}
			{isViewPastOrderDetail && (
				<OrderDetail orderDetails={order} past={true} />
			)}
		</React.Fragment>
	);
}

export default OrderCard;
