import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const navigationItems = props => (
    <div>
            <ul className={styles.navigationItems}>
        <NavigationItem active link="/">Sandwich Stacker</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
    </div>

);

export default navigationItems;
