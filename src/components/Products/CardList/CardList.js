
import React from "react";

import CardProduct from "../CardProduct/CardProduct";
import styles from "./CardList.module.css"
const CardList = ({ cardList }) => {
    return (
        <section className={ styles.cardSection }>
            <div className={ styles.cardContainer }>
                { cardList && cardList.map((card) => <CardProduct key={ card.id } data={ card } />) }
            </div>
        </section>
    );
}

export default CardList