import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate stripe secret
        const getClienteSecret = async () =>{
            const response = await axios({
                method: 'post',
                //Stipe expects the total in a currencies subunits if dollars stripe expects cents 
                url: `/payments/create?total=${getBasketTotal(basket) * 100 }`
            });
            setClientSecret(response.data.clientSecret);
        };

        getClienteSecret();
    },[basket]);

    /*console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)*/
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        //disable button to prevent multiple "payments"
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent is stripe payment confirmation response
            

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace("/orders");
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to ="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* Pamyent section - delivery adress */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Guadalajara, Mx</p>
                    </div>
                </div>

                {/* Pamyent section - Review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - payment  method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            
                            <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}  
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                                <button disabled={processing || disabled || succeeded} className="a">
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment