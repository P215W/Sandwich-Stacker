import React from "react";
import styles from "./Order.module.css";

const order = props => (
        <div className={styles.order}>
            <p><strong>Ingredients:</strong></p>
            <ul>
               {props.ingredients.map(i => (
                    <li key={Object.keys(i)} style={{textTransform: "capitalize"}}>{Object.keys(i)}: {Object.values(i)}</li>     // [ {salad: 0}, ]
               ))}
            </ul>
            <p><strong>Price:</strong> $ {props.price}</p>
        </div>
);


export default order;
