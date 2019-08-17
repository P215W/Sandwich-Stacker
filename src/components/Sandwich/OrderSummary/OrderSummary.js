import React from "react";
import styles from "./OrderSummary.module.css";
import Button from "../../Button/Button";

const orderSummary = props => {
    return (
        <div className={styles.orderSummary}>
            <p><strong>Your order</strong></p>
            <p>A delicious sandwich with the following ingredients:</p>
            <ul>
                { Object.entries(props.ingredients).map(el => {
                    return <li key={el[0]}>{el[0]}<i>:</i> {el[1]}</li>;
                }) }
            </ul>
            <p>Total price: {props.totalPrice.toFixed(2)}</p>
            <p>Proceed to checkout?</p>
            <div className={styles.buttons}>
                <Button btnType="success" clicked={props.continueHandler}>Continue</Button>
                <Button btnType="danger" clicked={props.backdropHandler}>Cancel</Button>
            </div>
        </div>
    );
};

export default orderSummary;