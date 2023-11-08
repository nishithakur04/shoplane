import { useNavigate, Link } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";
import styles from "./NavigationBar.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from "../../../store/actions/cartActions";
import { logout } from "../../../store/actions/authActions";


const NavigationBar = () => {
    const cartItems = useSelector(state => state.cart.items);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleOrderSummary = () => {
        navigate('/ordersummary');
    }
    const handleLogOut = () => {
        dispatch(logout(false));
        dispatch(emptyCart())
        navigate('/')
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button >

                <div className={ `collapse navbar-collapse ${styles.categoryBar}` } id="navbarSupportedContent" >
                    <div className={ styles.logoContainer } > <Link className="navbar-brand" to="/home" > Shoplane</Link >
                    </div >

                    <CategoryList />
                    <div className={ styles.btnContainer } >
                        <button className="btn btn-outline-dark" type="submit" onClick={ handleLogOut }> LogOut</button >
                        <button className="btn btn-outline-dark" onClick={ handleOrderSummary }>
                            <i className="bi-cart-fill me-1" ></i >
                            <img className={ styles.cartImg } src="/images/shopping-cart.png" alt="cart-img" />
                            <span className={ styles.cartTitle }>Cart</span>
                            < span className="badge badge-pill badge-dark" >  { cartItems.length }</span >
                        </button >
                    </div >
                </div >
            </nav >
        </header >

    );
}
export default NavigationBar