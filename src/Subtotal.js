import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        {/* Part of the homework */}
                        Subtotal (0 items):  {/*basket.length*/}
                        <strong>{` ${value}`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={0}  /*getBasketTotal(basket)*///part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
