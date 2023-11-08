import CardList from "../components/Products/CardList/CardList";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Endpoints from "../api/Endpoints";
import axios from "axios";
import Layout from "../components/Layout/Layout";


const HomePage = () => {
    const [cardList, setCardList] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // access query parameters
    const filterBy = queryParams.get("category")
    const fetchData = () => {
        axios.get(Endpoints.ALL_PRODUCT_URL)
            .then(response => {
                if (filterBy) {
                    let filteredItems = response.data.filter(item => item.category === filterBy)
                    setCardList(filteredItems);
                } else {
                    setCardList(response.data)
                }
            })
            .then(error => console.log(error))
    }
    useEffect(() => {
        fetchData();
    }, [filterBy])
    return (
        <Layout>
            <CardList cardList={ cardList } />
        </Layout>

    );
}
export default HomePage