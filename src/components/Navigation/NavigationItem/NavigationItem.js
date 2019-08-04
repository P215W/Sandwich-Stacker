import React from "react";
import styles from "./NavigationItem.module.css";

const navigationItem = props => (
    <li className={styles.navigationItem}>
        <a href={props.link} className={ props.isActive ? styles.active : null }>
            {props.children}
        </a>
    </li>
);

export default navigationItem;
