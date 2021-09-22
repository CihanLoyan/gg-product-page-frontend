import React from 'react'
import AddToCard from '../AddToCard/addToCard'
import Description from '../Description/description'
import Price from '../Price/price'
import Title from '../Title/title'

export default function Information( {title, price, description} ) {  // DESTRUCTURING
    return (
        <div className="info">
            <Title title={title}/>
            <Price title={price} />
            <Description content={description} />
            <AddToCard span="Sepete Ekle" />
        </div>
    )
}
