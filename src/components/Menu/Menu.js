import React from "react";
import styles from "./Menu.module.css";

const menu = props => (
    <div onClick={props.clicked} className={styles.menu}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menu;