import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/actions/cartActions";
import { useEffect, useState } from "react";

const AddToCart = ({ item }) => {
    const [isAddCart, setIsAddCart] = useState(true);
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        item.quantity = 1;
        dispatch(addToCart(item))
        setIsAddCart(false)
    }
    const handleRemoveCart = () => {
        dispatch(removeFromCart(item));
        setIsAddCart(true)
    }
    const checkCartItems = () => {
        let cartItem = cartItems.filter(cart => cart.id === item.id);
        if (cartItem && cartItem.length > 0) {
            setIsAddCart(false);
        }
    }
    useEffect(() => {
        checkCartItems();
    })
    return (
        <>
            {
                isAddCart ? <button type="button" className="btn btn-outline-dark" onClick={ handleAddToCart }>Add to Cart</button> : <button type="button" className="btn btn-outline-dark" onClick={ handleRemoveCart }>Remove From Cart</button>
            }

        </>
    );
}
export default AddToCart