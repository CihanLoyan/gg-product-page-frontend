import React, {useState} from 'react'

export default function Gallery({images}) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const handleClick = (e, index) => {
        console.log("thumbnail-clicked", index)
        setActiveImageIndex(index)
    }
    return (
        <div className="gallery">
            <div className="big-image">
                <img src={`./${images[activeImageIndex]}`} className="big-img" />
            </div>
            <ul className="thumbnail-wrapper">
                {images.map((image, index) => {
                    return <li onClick={(e) => handleClick(e, index)}><img src={`./${image}`} className="small-img" /></li>      
                })}
            </ul>
        </div>
    )
}
