import React from 'react'

export default function AlertBox(props) {
    return (
        <div className={`alert-box ${!props.isVisible ? "hidden" : ""}`}>
            {props.text}
            {props.icon}
        </div>
    )
}
