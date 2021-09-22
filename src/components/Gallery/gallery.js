import React from 'react'

export default function Gallery({images}) {
    return (
        <div className="gallery">
            <div className="big-image">
                <img src={`./${images[0]}`} />
            </div>
            <div className="thumbnail-wrapper">
                {images.map((image) => {
                    return <img src={`./${image}`}/>       
                })}
            </div>
        </div>
    )
}
