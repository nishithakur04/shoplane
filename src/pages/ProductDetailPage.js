import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import Endpoints from "../api/Endpoints";
import ProductDetail from '../components/Products/ProductDetail/ProductDetail'
import Layout from "../components/Layout/Layout";


const ProductDetailPage = (props) => {
    let { id } = useParams();
    const [productDetail, setProductDetail] = useState({})

    const fetchData = () => {
        axios.get(Endpoints.PRODUCT_DETAIL_URL + id)
            .then(response => setProductDetail(response.data))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        fetchData()
    });
    return (
        <Layout>
            <ProductDetail data={ productDetail } />
        </Layout>
    );
}
export default ProductDetailPage