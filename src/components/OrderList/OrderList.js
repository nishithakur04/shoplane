import styles from "./OrderList.module.css"
import { useDispatch, useSelector } from 'react-redux';
import QuantityBtn from "./QuantityButton /QuantityBtn";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../../store/actions/cartActions";
import AddToCart from "../AddToCart/AddToCart";
const OrderList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const calculateTotal = () => {
        let grandTotal = 0;
        cartItems.forEach(cart => {
            grandTotal = Math.round(grandTotal + (cart.price * cart.quantity))
        });
        return grandTotal;
    }

    const handleCheckOut = () => {
        navigate("/orderConfirmation")
    }
    const handleRemoveCart = (cart) => {
        dispatch(removeFromCart(cart));
    }
    return (
        <div className={ styles.ordersContainers }>
            { cartItems && cartItems.length > 0 ? <div>
                { cartItems.map((cart) => {
                    return (
                        <div className={ styles.orderItem } key={ cart.id }>
                            <div >
                                <img className={ styles.orderImg } src={ cart.image }
                                    alt="orderImg" />
                            </div>

                            <div className={ styles.orderDescContainer }>
                                <div className={ styles.orderDesc }>
                                    <div className={ styles.orderDescTitle } >{ cart.title }</div>
                                    <div className={ styles.orderPrice }>
                                        ₹{ cart.price }
                                    </div>

                                </div>
                                <div className={ styles.orderQuantitySection }>
                                    <QuantityBtn item={ cart } />
                                    <AddToCart item={ cart } />
                                </div>
                            </div>

                        </div>
                    );
                }) }
                <hr></hr>
                <div className={ styles.grandTotalContainer }>
                    <div><h2>Grand Total: ₹{ calculateTotal() }</h2></div>
                    <div> <button type="button" className="btn btn-warning" onClick={ handleCheckOut }>Proceed to checkOut</button></div>

                </div>
            </div> : <div>
                There is no cart items in your cart!
            </div> }

        </div >

    );
}
export default OrderList