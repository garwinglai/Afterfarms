import React, { useState } from 'react'
import styles from "../../styles/css/shop/product-card.module.css"

function ProductCard({ item }) {
  const [isItemAdded, setIsItemAdded] = useState(false)
  const [itemAddCount, setItemAddCount] = useState(1)

  const { name, ourPrice, marketPrice, discount, bestSeller, imgLinks } = item

  function handleAddItemClick(e) {
    const { name } = e.target


    console.log(name)

    switch (name) {
      case "addItemButton":
        setIsItemAdded(!isItemAdded)
        break;
      case "plusButton":
        return setItemAddCount(itemAddCount + 1)
      case "minusButton":
        if (itemAddCount > 1) {
          setItemAddCount(itemAddCount - 1)
        } else {
          setIsItemAdded(!isItemAdded)
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
      return <button name="addItemButton" onClick={handleAddItemClick}>Add</button>
    } else {
      return <div className={styles.ProductCard_buttonAddMore}>
        <button name="minusButton" onClick={handleAddItemClick}>-</button>
        <p>{itemAddCount}</p>
        <button name="plusButton" onClick={handleAddItemClick}>+</button>
      </div>
    }
  }

  return (
    <div className={styles.ProductCard}>

      {/* //* Product Card image */}
      <img src={imgLinks[0]} alt={name} />


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
          {item.bestSeller && showBestSeller()}
        </div>
      </div>

      {/* //* Product Card Button */}
      {showAddItemButton()}

    </div>
  )
}

export default ProductCard
