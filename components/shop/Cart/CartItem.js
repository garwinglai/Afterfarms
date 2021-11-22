import React, { useState } from "react";
import styles from "../../../styles/css/shop/cart/cart-item.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";


function CartItem({ item }) {
	const [itemAddCount, setItemAddCount] = useState(1);

	const { name, ourPrice, marketPrice, discount, imgLinks } = item;

	// TODO: UseEffect => either load cookies to button count, or pass through props

	function handleAddItemClick(e, name) {
		switch (name) {
			case "plusButton":
				setItemAddCount(itemAddCount + 1);
				break;
			case "minusButton":
				if (itemAddCount >= 1) {
					setItemAddCount(itemAddCount - 1);
				} else {
					window.alert("can't remove item yet without cookies");
					// Todo: If itemCount < 1 , remove from cookie & list
				}
				break;
			default:
				break;
		}
	}

	function showAddItemButton() {
		return (
			<div className={styles.CartItem_addMinusButton}>
				{itemAddCount === 0 ? (
					<IconButton>
						<DeleteOutlineIcon
							onClick={(e) => handleAddItemClick(e, "minusButton")}
						/>
					</IconButton>
				) : (
					<IconButton
						name="minusButton"
						onClick={(e) => handleAddItemClick(e, "minusButton")}
					>
						<RemoveIcon />
					</IconButton>
				)}

				<p>{itemAddCount}</p>
				<IconButton
					name="plusButton"
					onClick={(e) => handleAddItemClick(e, "plusButton")}
				>
					<AddIcon />
				</IconButton>
			</div>
		);
	}

	return (
		<div className={styles.CartItem}>
			<img src={imgLinks[0]} alt={name} />
			<div className={styles.CartItem_center}>
				<p>{name}</p>
				{showAddItemButton()}
			</div>
			<div className={styles.CartItem_right}>
				<div className={styles.CartItem_price}>
					<p className={styles.CartItem_marketPrice}>{marketPrice}</p>
					<p>
						<b className={styles.CartItem_ourPrice}> {ourPrice}</b>
					</p>
				</div>
				<p className={styles.CartItem_discount}>{discount}</p>
			</div>
		</div>
	);
}

export default CartItem;
