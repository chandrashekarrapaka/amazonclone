import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                    src="data:image/png;base64,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" alt="" />

                <div >
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {/* Basket */}
                    {/* Basket */}

                    {/* Basket */}


                </div>
            </div>
            <div className="checkout_right">
                <Subtotal></Subtotal>
            </div>
        </div>
    )
}

export default Checkout
