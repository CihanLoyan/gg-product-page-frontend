import React from 'react'
import AddToCard from '../AddToCard/addToCard'
import Description from '../Description/description'
import Price from '../Price/price'
import Title from '../Title/title'

export default function Information( {product} ) {  // DESTRUCTURING
    return (
        <div className="Info">
            <Title title={product.title}/>
            <Price title={product.price} />
            <Description content={product.description} />
            <AddToCard span="Sepete Ekle" />
        </div>
    )
}
