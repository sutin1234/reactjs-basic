import React from 'react'

export default function CardItems(props) {
    const { name, price, qty, imageUrl } = props.product
    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <div className="card-text">Price: {price}</div>
                <div className="card-text">Qty: {qty}</div>
            </div>
        </div>
    )
}
