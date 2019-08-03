import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

const toolbar = props => {
    return (
        <div className={styles.toolbar}>
            <header>Menu</header>
            <Logo />
            <NavigationItems />
        </div>
    );
}

export default toolbar;