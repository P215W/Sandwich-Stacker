import React from "react";
import styles from "./SideDrawer.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../UI/Backdrop/Backdrop";

const sideDrawer = props => {
    let sideDrawerStatus = [styles.sideDrawer, styles.close];
    if (props.isSideDrawerOpen) {
        sideDrawerStatus = [styles.sideDrawer, styles.open];
    }
    return (
        <Auxiliary>
            <Backdrop doesModalShow={props.isSideDrawerOpen} clicked={props.closeSide}/>
            <div className={sideDrawerStatus.join(" ")}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <nav><NavigationItems /></nav>
            </div>
        </Auxiliary>
    );
};

export default sideDrawer;