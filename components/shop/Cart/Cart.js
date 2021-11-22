import React, { useEffect, useState } from "react";
import styles from "../../../styles/css/shop/cart/cart.module.css";
import { produceCategoryData } from "../../../data/tempProduceCategoryData";
import CartItem from "./CartItem";
import OrderProgressBar from "../OrderProgressBar";
import { LinearProgress } from "@mui/material";

function Cart({ closeCart }) {
	const [hasItems, setHasItems] = useState(true);
	const [items, setItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState("");

	// Todo: useEffect to load setHasItems through cookies/cache

	useEffect(() => {
		console.log(produceCategoryData);
		const itemsAdded = produceCategoryData[0].categories[0].items;
		// const total = itemsAdded.reduce((accum, item) => {
		// 	return accum + item.ourPrice;
		// });
		// setHasItems(true);
		setItems(itemsAdded);
		// setTotalPrice(total);
	}, []);

	function showNoItemsCart() {
		return (
			<>
				<div className={styles.Cart_header}>
					<h5>0 Items</h5>
					<button className={styles.Cart_headerCloseButton} onClick={closeCart}>
						X
					</button>
				</div>
				<img
					src="https://media.istockphoto.com/photos/arrangement-of-several-vegetables-against-white-background-picture-id97920896?b=1&k=20&m=97920896&s=170667a&w=0&h=L6G77osmTe0Hf6EXWY33J-QgXjumiwk9Df9kdyLnf84="
					alt="Cart"
				/>
				<p>
					Your currently have 0 items in your cart. Start shopping for your
					groceries now!
				</p>
				<button onClick={closeCart}>Start Shopping</button>
			</>
		);
	}

	function showHasItemsCart() {
		return (
			<>
				<div className={styles.Cart_header}>
					<h5>{items.length} Items</h5>
					<div className={styles.Cart_headerRight}>
						<p>$10.19 subtotal</p>
						<button
							className={styles.Cart_headerCloseButton}
							onClick={closeCart}
						>
							X
						</button>
					</div>
				</div>
				<div className={styles.Cart_items}>
					{items &&
						items.map((item, index) => {
							return <CartItem key={index} item={item} />;
						})}
				</div>
				<div className={styles.Cart_totals}>
					<p>(Total saved: $9.01)</p>
					<div className={styles.Cart_subTotal}>
						<div className={styles.SubTotal_titles}>
							<p>Subtotal:</p>
							<p>Devlivery:</p>
							<p>
								<b>Total:</b>
							</p>
						</div>
						<div className={styles.SubTotal_value}>
							<p>$30.15</p>
							<p>$5.00</p>
							<p>
								<b> $35.15 </b>
							</p>
						</div>
					</div>
				</div>
				{/* <OrderProgressBar /> */}
				<LinearProgress />
			</>
		);
	}

	return (
		<div className={styles.Cart}>
			{hasItems ? showHasItemsCart() : showNoItemsCart()}
		</div>
	);
}

export default Cart;
