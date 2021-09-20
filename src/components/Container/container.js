import React from 'react'
import Information from '../Information/information'

export default function Container(props) {
    return (
        <div className="Container">
            {props.product.map( (p) => {
                return <Information product={p} />;
            })}
        </div>
    )
}
