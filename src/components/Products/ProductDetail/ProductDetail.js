import AddToCart from "../../AddToCart/AddToCart";
import styles from "./ProductDetail.module.css"
const ProductDetail = (props) => {

    const { title, price, description, image } = props.data
    return (
        <>
            <section className={ styles.banner }>
                <div className={ styles.bannerContainer }>
                    <div className={ styles.bannerImg }><img src={ image } alt="prodDetail-img" /></div >
                    <div className={ styles.bannerTitle } > { title }</div >
                    <div className={ styles.bannerPrice } > ₹{ price }</div >
                </div >
            </section >
            <div className={ styles.productDetailContainer } >
                <section className={ styles.imgSec } >
                    <img src={ image } alt="prodDetail-img" />
                </section >
                <section className={ styles.descSec } >
                    <h3> { title }</h3 >
                    <div className={ styles.descPrice } >
                        ₹{ price }
                        <br></br>
                        <small>Inclusive of all taxes</small>
                    </div >
                    <p>{ description }</p>
                    <AddToCart item={ props.data } />
                </section >
            </div >
        </>
    );
}
export default ProductDetail