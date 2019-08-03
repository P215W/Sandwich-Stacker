import React from "react";
import styles from "./NavigationItem.module.css";

const navigationItem = props => (
    <li className={styles.navigationItem}>
        <a href={props.link}>
            {props.children}
        </a>
    </li>
);

export default navigationItem;
