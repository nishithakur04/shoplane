import styles from "./Banner.module.css"
const Banner = () => {
    return (
        <section>
            <div className={ `d-flex justify-content-center align-items-center ${styles.bannerContainer}` }>
                <div className={ styles.bannerTaglineContainer }>
                    <h3>Shop in style </h3>
                </div>
                <div className={ styles.bannerTaglineContainer }>
                    <h6>with this amazing shopping site</h6>
                </div >
            </div >
        </section >
    );
}
export default Banner