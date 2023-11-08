import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <footer>
            <div className={ styles.footerContainer }>
                <div className={ styles.footerCopyright }>Copyright © Shoplane 2023</div>
            </div >
        </footer >
    );
}
export default Footer