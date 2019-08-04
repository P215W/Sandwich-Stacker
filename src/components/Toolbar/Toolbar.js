import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import Menu from "../Menu/Menu";

const toolbar = props => {
    return (
        <header className={styles.toolbar}>
            <Menu clicked={props.menuHandler} />
            <Logo height="64%" />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;