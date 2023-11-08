import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import Endpoints from "../../../api/Endpoints";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const fetchData = () => {
        axios.get(Endpoints.PRODUCT_CATEGORY_URL)
            .then(response => setCategories(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }
        , [])

    return (
        <ul className="navbar-nav mr-auto" >
            <li className="nav-item active" >
                <Link className="nav-link" to="/favourite" > Favourite < span className="sr-only" > (current)</span ></Link >
            </li >
            {
                categories.map((category, index) => (<li className="nav-item " key={ index } >
                    <Link className="nav-link" to={ `/home?category=${category}` } > { category }</Link >
                </li >))
            }
        </ul >

    );

}
export default CategoryList