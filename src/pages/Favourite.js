import CardList from "../components/Products/CardList/CardList";
import { useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";


const Favourite = () => {
    const favCartItems = useSelector(state => state.favCarts.items);
    return (
        <Layout>
            { favCartItems && favCartItems.length > 0 ? <CardList cardList={ favCartItems } /> : <div>
                No Items in your favourite list!
            </div> }
        </Layout>

    );
}
export default Favourite