import React from 'react';
import stylesheet from './OrderConfirmation.module.css'
const OrderConfirmation = () => {
    return (
        <div className="container">
            <div className="column">
                <div className="col-md-3"></div>
                <div className={ stylesheet.orderConfirmationContainer }>
                    <h3>Your Order is confirmed </h3>
                    <h2>Thank you for Shopping with us </h2>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div >

    );
}
export default OrderConfirmation;