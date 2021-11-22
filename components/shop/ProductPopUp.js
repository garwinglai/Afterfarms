import React, { useState } from "react";
import styles from "../../styles/css/shop/ProductPopUp.module.css";

function ProductPopUp({ closePopUp, item }) {
	const [isItemAdded, setIsItemAdded] = useState(false);
	const [itemAddCount, setItemAddCount] = useState(1);
	const [mainImageUrl, setMainImageUrl] = useState(item.imgLinks[0]);

	function handleImageClick(e) {
		const { name } = e.target;
		for (let i = 0; i < item.imgLinks.length; i++) {
			const image = item.imgLinks[i];

			if (name === i.toString()) {
				return setMainImageUrl(image);
			}
		}
	}

	function handleAddItemClick(e, item) {
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

	function showAddItemButton() {
		if (!isItemAdded) {
			return (
				<button
					name="addItemButton"
					onClick={(e) => handleAddItemClick(e, item)}
				>
					Add
				</button>
			);
		} else {
			return (
				<div className={styles.ProductPopUp_buttonAddMore}>
					<button
						name="minusButton"
						onClick={(e) => handleAddItemClick(e, item)}
					>
						-
					</button>
					<p>{itemAddCount}</p>
					<button
						name="plusButton"
						onClick={(e) => handleAddItemClick(e, item)}
					>
						+
					</button>
				</div>
			);
		}
	}

	return (
		<div className={styles.ProductPopUp}>
			<div className={styles.ProductPopUp_images}>
				{item.bestSeller ? (
					<p className={styles.ProductPopUp_bestSeller}>Best Seller</p>
				) : (
					<p className={styles.ProductPopUp_bestSeller}></p>
				)}
				<img
					className={styles.ProductPopUp_mainImage}
					src={mainImageUrl}
					alt={item.name}
				/>
				<div className={styles.ProductPopUp_imageListContainer}>
					<div className={styles.ProductPopUp_imageList}>
						{item.imgLinks.map((img, index) => {
							return (
								<img
									name={index}
									className={styles.ProductPopUp_subImages}
									tabIndex={0}
									src={img}
									alt={item.name}
									key={index}
									onClick={handleImageClick}
								/>
							);
						})}
					</div>
					<button className={styles.ProductPopUp_nxtImageButton}>{`>`}</button>
				</div>
			</div>
			<div className={styles.ProductPopUp_details}>
				<h1> {item.name} </h1>
				<button className={styles.ProductPopUp_closePopUp} onClick={closePopUp}>
					X
				</button>
				<div className={styles.ProductPopUp_deatailsPrice}>
					<h4>{item.ourPrice}</h4>
					<h5> {item.marketPrice} </h5>
				</div>
				<h5 className={styles.ProductPopUp_discount}>
					{" "}
					{item.discount} off market price{" "}
				</h5>
				{showAddItemButton()}
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
}

export default ProductPopUp;
