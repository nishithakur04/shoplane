import { useNavigate } from "react-router-dom";
import CartItemPrice from "./CartItemPrice";
import styles from "./PriceSummary.module.css"

const PriceSummary = () => {
    const navigate = useNavigate();
    const handleProceedToBuy = () => {
        navigate('/orderConfirmation');
    }
    return (
        < div className={ styles.ordersSummarySection } >
            <ul>
                <h4>Order Summary</h4>
                <CartItemPrice />
                <br />
                <li>Shipping Esimate: ₹50</li>
                <br />
                <li>Tax Esimate: ₹70</li>
                <br />
                <h5>Order Total: ₹2170</h5>
                <br />
                <button type="button" className="btn btn-warning" onClick={ handleProceedToBuy }>Proceed to Buy</button>
            </ul>

        </div >

    );
}
export default PriceSummary