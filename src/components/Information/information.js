import React, { useState } from 'react'
import AddToCard from '../AddToCard/addToCard'
import Description from '../Description/description'
import Price from '../Price/price'
import Title from '../Title/title'
import AlertBox from '../AlertBox/alertBox'

export default function Information( {title, price, description} ) {  // DESTRUCTURING
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const handleAddToCart = () => {
        console.log("addtocart")
        setIsAddedToCart(true)
        setTimeout(() => {
            setIsAddedToCart(false)
        }, 2000);
    }
    const icon = <i class="fas fa-check"></i>
    return (
        <div className="info">
            <Title title={title} />
            <Price title={price} />
            <Description content={description} />
            <AddToCard span="Sepete Ekle" onClick={handleAddToCart} />
            <AlertBox isVisible={isAddedToCart} text="Sepete Eklendi" icon={icon} />
        </div>
    )
}
