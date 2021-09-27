import React from 'react'

export default function AddToCard(props) {

    return (
        <div className="add">
            <form action="#" method="GET">
                <button onClick={props.onClick} type="button">{props.span}</button>
            </form>
        </div>
    )
}
