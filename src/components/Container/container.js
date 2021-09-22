import React from 'react'
import Information from '../Information/information'
import Gallery from '../Gallery/gallery'

export default function Container( {productInfo} ) {
    return (
        <div className="container">  
            <Gallery images={productInfo.images}/>          
            <Information title={productInfo.title} price={productInfo.price} description={productInfo.description} />
        </div>
    )
}
