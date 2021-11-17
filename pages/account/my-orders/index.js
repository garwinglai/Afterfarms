import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";
import styles from "../../../styles/css/account/orders/my-orders.module.css";
import OrderCard from "../../../components/account/orders/OrderCard";
import OrderDetail from "../../../components/account/orders/OrderDetail";

function MyOrders() {
	// ! Test Data
	// TODO: Get actual order history information
	const currentOrderTestData = {
		date: "Nov 31st, 2021",
		produce: [
			{ quantity: "2", title: "Apple", price: "$2.50" },
			{ quantity: "2", title: "Banana", price: "$3.00" },
		],
		deliveryFee: "$5.00",
		total: "$30.00",
	};

	const pastOrderArrayTest = [
		{
			date: "Nov 1st, 2021",
			produce: [
				{ quantity: "2", title: "Apple", price: "$2.50" },
				{ quantity: "2", title: "Banana", price: "$3.00" },
			],
			deliveryFee: "$5.00",
			total: "$30.00",
		},
		{
			date: "Nov 22nd, 2021",
			produce: [
				{ quantity: "2", title: "Apple", price: "$2.50" },
				{ quantity: "2", title: "Banana", price: "$3.00" },
			],
			deliveryFee: "$5.00",
			total: "$30.00",
		},
	];

	const futureOrderArrayTest = [
		{ date: "Nov 1st", isSkipped: false },
		{ date: "Nov 8th", isSkipped: false },
	];

	const [isCurrentPast, setIsCurrentPast] = useState(false);
	const [isFuture, setIsFuture] = useState(false);
	const [currentOrder, setCurrentOrder] = useState(currentOrderTestData);
	const [pastOrders, setPastOrders] = useState(pastOrderArrayTest);
	const [futureOrders, setFutureOrders] = useState(futureOrderArrayTest);
	const [isViewCurrentOrder, setIsViewCurrentOrder] = useState(false);

	useEffect(() => {
		setIsCurrentPast(true);
	}, []);

	function handleMenuClick(e) {
		e.preventDefault();
		const { name } = e.target;
		switch (name) {
			case "currentAndPast":
				setIsCurrentPast(true);
				setIsFuture(false);
				break;
			case "future":
				setIsCurrentPast(false);
				setIsFuture(true);
				break;
			default:
				break;
		}
	}

	function showMenu() {
		return (
			<div className={styles.MyOrders_menu}>
				<button
					onClick={handleMenuClick}
					name="currentAndPast"
					style={
						isCurrentPast
							? {
									color: "var(--avocado-green)",
									textDecoration: "underline",
							  }
							: {}
					}
				>
					Current &amp; Past
				</button>
				<div className={styles.divider}>|</div>
				<button
					onClick={handleMenuClick}
					name="future"
					style={
						isFuture
							? { color: "var(--avocado-green)", textDecoration: "underline" }
							: {}
					}
				>
					Future
				</button>
			</div>
		);
	}

	function handleViewOrderDetails(orderId) {
		setIsViewCurrentOrder(!isViewCurrentOrder);
	}

	function handleCloseOrderDetail() {
		setIsViewCurrentOrder(false);
	}

	function showOrders() {
		if (isCurrentPast) {
			return (
				<div className={styles.MyOrders_cards}>
					{" "}
					<div className={styles.MyOrders_currentOrder}>
						<h4>Current Orders -</h4>
						<p>* Current order is shown when $30 minimum is reached.</p>
						<OrderCard
							order={currentOrder}
							current={true}
							viewOrder={handleViewOrderDetails}
						/>
						{isViewCurrentOrder && (
							<OrderDetail
								orderDetails={currentOrder}
								current={true}
								closeOrderDetail={handleCloseOrderDetail}
							/>
						)}
					</div>
					<div className={styles.MyOrders_pastOrders}>
						<h4 className={styles.PastOrderTitle}>Past Orders -</h4>
						{pastOrders[0] ? (
							pastOrders.map((item, index) => {
								return <OrderCard order={item} past={true} key={index} />;
							})
						) : (
							<p>You do not have any past orders.</p>
						)}
					</div>
				</div>
			);
		}

		if (isFuture) {
			return (
				<div className={styles.MyOrders_cards}>
					{" "}
					<h4>Upcoming Orders -</h4>
					{futureOrders.map((item, index) => {
						return (
							<OrderCard key={index} order={item} future={true} />
						);
					})}
				</div>
			);
		}
	}

	return (
		<Layout page="account">
			<SideMenu menuPage="MyOrders" page="account" anchor="undefined">
				<div className={styles.MyOrders}>
					<div className={styles.MyOrders_heading}>
						<h1>My Orders</h1>
						{showMenu()}
					</div>
					{showOrders()}
				</div>
			</SideMenu>
		</Layout>
	);
}

export default MyOrders;
