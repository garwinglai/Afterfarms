import React, { useState } from 'react'
import styles from "../../styles/css/shop/product-card.module.css"

function ProductCard({ item, handleItems }) {
  const [isItemAdded, setIsItemAdded] = useState(false)
  const [itemAddCount, setItemAddCount] = useState(1)

  const { name, ourPrice, marketPrice, discount, bestSeller, imgLinks } = item

  function handleAddItemClick(e, item) {
    const { name } = e.target

    switch (name) {
      case "addItemButton":
        setIsItemAdded(!isItemAdded)
        handleItems(item, itemAddCount)
        break;
      case "plusButton":
        setItemAddCount(itemAddCount + 1)
        handleItems(item, itemAddCount)
        break;
      case "minusButton":
        if (itemAddCount > 1) {
          setItemAddCount(itemAddCount - 1)
          handleItems(item, itemAddCount)
        } else {
          setIsItemAdded(!isItemAdded)
          handleItems(item, itemAddCount)
        }
        break;
      default:
        break;
    }
  }

  function showBestSeller() {
    return <p id={styles.bestSeller} className={styles.ProductCard_bestSeller}>Best Seller</p>
  }

  function showAddItemButton() {
    if (!isItemAdded) {
      return <button name="addItemButton" onClick={(e) => handleAddItemClick(e, item)}>Add</button>
    } else {
      return <div className={styles.ProductCard_buttonAddMore}>
        <button name="minusButton" onClick={(e) => handleAddItemClick(e, item)}>-</button>
        <p>{itemAddCount}</p>
        <button name="plusButton" onClick={(e) => handleAddItemClick(e, item)}>+</button>
      </div>
    }
  }

  return (
    <div className={styles.ProductCard}>

      {/* //* Product Card image */}
      <div className={styles.ProduceCard_imageContainer}>
        <img src={imgLinks[0]} alt={name} />
      </div>

      <div className={styles.ProductCard_infoContainer}>
        <div className={styles.ProductCard_itemProfile}>
          {/* //* Product Card Description Right */}
          <div className={styles.ProductCard_itemDescription}>
            <h5> {discount}</h5>
            <div className={styles.ProductCard_itemPrice}>
              <h4>{ourPrice}</h4>
              <p style={{ textDecoration: "line-through", color: "var(--gray-text)" }}>{marketPrice}</p>
            </div>
          </div>

          {/* //* Product Card Title */}
          <div className={styles.ProductCard_itemProfileTitle}>
            <h6>{name}</h6>
            {bestSeller && showBestSeller()}
          </div>
        </div>

        {/* //* Product Card Button */}
        {showAddItemButton()}
      </div>
    </div>
  )
}

export default ProductCard
