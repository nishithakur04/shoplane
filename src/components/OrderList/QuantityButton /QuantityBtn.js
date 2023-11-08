import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../../store/actions/cartActions';
import styles from './QuantityButton.module.css'

function QuantityBtn({ item }) {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);

    const increment = () => {
        item.quantity = count + 1;
        dispatch(updateCart(item))
        setCount(old => old + 1);
    };

    const decrement = () => {
        if (count > 1) {
            item.quantity = count - 1;
            dispatch(updateCart(item))
            setCount(old => old - 1);
        }
    };

    return (
        <div className={ styles.quantityButtonContainer } >
            <button className="btn btn-light" onClick={ decrement }>-</button>
            <div className="btn btn-light">{ count }</div>
            <button className="btn btn-light" onClick={ increment }>+</button>
        </div>
    );
}

export default QuantityBtn;
