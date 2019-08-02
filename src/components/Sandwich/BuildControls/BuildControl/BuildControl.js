import React from "react";
import styles from "./BuildControl.module.css";

const buildControl = props => {

return (
    <div className={styles.buildControl}>
        <div className={styles.label}>{props.label}</div>
        <button className={styles.more} onClick={props.moreHandler}>More</button>
        <button className={styles.less} onClick={props.lessHandler} disabled={props.isDisabled}>Less</button>
    </div>
);
};

export default buildControl;