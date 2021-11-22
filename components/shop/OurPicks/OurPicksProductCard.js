import React, { useState } from "react";
import styles from "../../../styles/css/shop/our-picks/our-picks-product-card.module.css";
import ClickAwayListener from "@mui/core/ClickAwayListener";
import ProductPopUp from "../ProductPopUp";
// !Temp Data
import { produceCategoryData } from "../../../data/tempProduceCategoryData";

function OurPicksProductCard() {
	const [isItemAdded, setIsItemAdded] = useState(false);
	const [itemAddCount, setItemAddCount] = useState(1);
	const [showProductDetail, setShowProductDetail] = useState(false);

	const item = produceCategoryData[0].categories[0].items[0];

	function handleViewItemDetail() {
		setShowProductDetail(!showProductDetail);
	}

	function handleAddItemClick(e) {
		const { name } = e.target;

		switch (name) {
			case "addItemButton":
				setIsItemAdded(!isItemAdded);
				// handleItems(item, itemAddCount)
				break;
			case "plusButton":
				setItemAddCount(itemAddCount + 1);
				// handleItems(item, itemAddCount)
				break;
			case "minusButton":
				if (itemAddCount > 1) {
					setItemAddCount(itemAddCount - 1);
					// handleItems(item, itemAddCount)
				} else {
					setIsItemAdded(!isItemAdded);
					// handleItems(item, itemAddCount)
				}
				break;
			default:
				break;
		}
	}

	function showBestSeller() {
		return (
			<p
				id={styles.bestSeller}
				className={styles.OurPicksProductCard_bestSeller}
			>
				Best Seller
			</p>
		);
	}

	function showAddItemButton() {
		if (!isItemAdded) {
			return (
				<button name="addItemButton" onClick={(e) => handleAddItemClick(e)}>
					Add
				</button>
			);
		} else {
			return (
				<div className={styles.OurPicksProductCard_buttonAddMore}>
					<button name="minusButton" onClick={(e) => handleAddItemClick(e)}>
						-
					</button>
					<p>{itemAddCount}</p>
					<button name="plusButton" onClick={(e) => handleAddItemClick(e)}>
						+
					</button>
				</div>
			);
		}
	}
	return (
		<div className={styles.OurPicksProductCard}>
			{/* //* Product Card image */}
			<div className={styles.OurPicksProductCard_imageContainer}>
				<img
					className={styles.OurPicksProductCard_img}
					src="/images/inventory/product/apple/apple.jpg"
					alt="apple"
					onClick={handleViewItemDetail}
				/>
			</div>

			<div className={styles.OurPicksProductCard_infoContainer}>
				<div className={styles.OurPicksProductCard_itemProfile}>
					{/* //* Product Card Description Right */}
					<div className={styles.OurPicksProductCard_itemDescription}>
						<h5> -20%</h5>
						<div className={styles.OurPicksProductCard_itemPrice}>
							<h4>3.99</h4>
							<p
								style={{
									textDecoration: "line-through",
									color: "var(--gray-text)",
								}}
							>
								4.99
							</p>
						</div>
					</div>

					{/* //* Product Card Title */}
					<div className={styles.OurPicksProductCard_itemProfileTitle}>
						<h6>Apple</h6>
						{showBestSeller()}
					</div>
				</div>

				{/* //* Product Card Button */}
				{showAddItemButton()}
			</div>
			{showProductDetail && (
				<div className={styles.ItemDetail_container}>
					<div className={styles.ItemDetail_background}></div>
					<ClickAwayListener onClickAway={handleViewItemDetail}>
						<div>
							<ProductPopUp closePopUp={handleViewItemDetail} item={item} />
						</div>
					</ClickAwayListener>
				</div>
			)}
		</div>
	);
}

export default OurPicksProductCard;
