import React from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary";

const modal = props => {
    return (
        <Auxiliary>
            <Backdrop doesModalShow={props.purchasing} clicked={props.backdropHandler} />
            <div 
                className={styles.modal}
                style={{
                    transform: props.purchasing ? "translate(0)" : "translateY(-200vH)",
                    opacity: props.purchasing ? "1" :"0"
                }}>
                {props.children}
            </div>
        </Auxiliary>
    );
};

export default modal;