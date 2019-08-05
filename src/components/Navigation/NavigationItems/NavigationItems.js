import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const navigationItems = props => (
        <ul className={styles.navigationItems}>
                <NavigationItem link="/">Sandwich Stacker</NavigationItem>
                <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
);

export default navigationItems;
