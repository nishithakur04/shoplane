
import React from 'react';
import { useSelector } from 'react-redux';


const CartItemPrice = () => {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <ul>
      {
        cartItems.map((cart) => {
          return (
            <li key={ cart.id }>
              ${ cart.price } * { cart.quantity }
            </li>
          );
        })
      }
    </ul>
  )

}


export default CartItemPrice;
