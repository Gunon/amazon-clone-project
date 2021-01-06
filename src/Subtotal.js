import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
    const [{basket},dispatch] = useStateValue();

    function getBasketTotal({basket}){
        var total = 0;
        for (let index = 0; index < basket.length; index++) {
            const element = basket[index];
            total += element.price;
        }
        return total;
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({basket.length} items):  
                        <strong>{` ${value}`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal({basket})}  /*getBasketTotal(basket)*///part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}


export default Subtotal
/*id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,*/