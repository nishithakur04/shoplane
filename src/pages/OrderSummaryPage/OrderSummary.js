
import Layout from "../../components/Layout/Layout";
import OrderList from "../../components/OrderList/OrderList";
import styles from "./OrderSummary.module.css"

const OrderSummary = () => {
    return (
        <Layout>
            <div className="container">
                <section className={ styles.orderSection }>
                    <OrderList />
                </section>
            </div>
        </Layout>
    );
}
export default OrderSummary