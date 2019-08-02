import React from "react";
import styles from "./Backdrop.module.css";

const backdrop = props => props.doesModalShow ? <div className={styles.backdrop} onClick={props.clicked}></div> : null;

export default backdrop;