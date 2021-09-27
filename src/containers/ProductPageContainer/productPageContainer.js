import React from 'react'
import Information from '../../components/Information/information'
import Gallery from '../../components/Gallery/gallery'

export default function ProductPageContainer( {productInfo} ) {
    return (
        <div className="container">  
            <Gallery images={productInfo.images}/>          
            <Information title={productInfo.title} price={productInfo.price} description={productInfo.description} />
        </div>
    )
}
