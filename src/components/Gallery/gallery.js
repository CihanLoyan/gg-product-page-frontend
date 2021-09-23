import React from 'react'

export default function Gallery({images}) {
    return (
        <div className="gallery">
            <div className="big-image">
                <img src={`./${images[0]}`} className="big-img" />
            </div>
            <div className="thumbnail-wrapper">
                {images.map((image) => {
                    return <ul><li><img src={`./${image}`} className="small-img" /></li></ul>       
                })}
            </div>
        </div>
    )
}
