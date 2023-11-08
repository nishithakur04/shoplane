
import React, { useEffect, useState } from "react";
import styles from "./CardProduct.module.css"
import { useNavigate } from "react-router-dom";
import AddToCart from "../../AddToCart/AddToCart";
import { useDispatch, useSelector } from "react-redux";
import { addToFavCart, removeFromFavCart } from "../../../store/actions/favCartActions";
const CardProduct = (props) => {
    const { id, title, price, image } = props.data;
    const [favourite, setFavourite] = useState(false);
    const favCarts = useSelector(state => state.favCarts.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleProductClick = () => {
        navigate('/productdetail/' + id)
    }
    const handleFavourite = () => {
        if (favourite) {
            dispatch(removeFromFavCart(props.data))
            console.log(favCarts.length);
        } else {
            dispatch(addToFavCart(props.data));
        }
        setFavourite(!favourite);
    }
    const checkIsFavourite = () => {
        const isFavCart = favCarts.filter(item => item.id === id);
        if (isFavCart && isFavCart.length > 0) {
            setFavourite(true);
        } else {
            setFavourite(false);
        }
    }
    useEffect(() => {
        checkIsFavourite();
    }, [])
    return (
        <div className={ `card ${styles.cardProduct}` }>
            <div className="position-absolute fav-icon" onClick={ handleFavourite }>
                { favourite ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart"
                    viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg> }

            </div>
            <img src={ image } className={ `card-img-top ${styles.cardImg}` } alt="prod-img" />
            <div className={ `card-body ${styles.cardItems}` }>
                <div className="card-title-div">
                    <h5 className={ `card-title text-center ${styles.productTitle}` } onClick={ handleProductClick }>{ title }</h5>
                </div>
                <p className="card-text">₹{ price }</p>
                <AddToCart item={ props.data } />
            </div>
        </div>
    );
}

export default CardProduct