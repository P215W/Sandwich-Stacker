import React from "react";
import styles from "./Menu.module.css";

const menu = props => (
    <div onClick={props.clicked} className={styles.menu}>
        <div className="menubar"></div>
        <div className="menubar"></div>
        <div className="menubar"></div>
    </div>
);

export default menu;