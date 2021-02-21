import React from 'react'
import CardItems from './CardItems'

const products = [
    {
        imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--be3eR7Dm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://nunomalex.me/svelte-logo.png',
        name: 'Svelte3',
        price: 5300.00,
        qty: 20
    }, {
        imageUrl: 'https://i.ytimg.com/vi/DOS6zcHMXeI/maxresdefault.jpg',
        name: 'Sapper',
        price: 8300.00,
        qty: 10
    }, {
        imageUrl: 'https://miro.medium.com/max/950/1*TH3SkEX-IeE0P16qJEWO2g.jpeg',
        name: 'Snowpack',
        price: 87300.00,
        qty: 6
    }
]

export default function Card() {
    return (
        <div className="conatiner">
            <div className="row">
                {
                    products.map((product, index) => {
                        return (
                            <div className="col-md-4 my-3" key={index}>
                                {/* <CardItems imageUrl={product.imageUrl} name={product.name} price={product.price} qty={ product.qty} /> */}
                                <CardItems product={product}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
