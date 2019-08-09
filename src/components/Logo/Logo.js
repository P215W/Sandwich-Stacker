import React from "react";
import styles from "./Logo.module.css";
import LogoImage from "../../assets/LogoImage.PNG";

const logo = props => (
  <div className={styles.logo} style={{ height: props.height }}>
    <img src={LogoImage} alt="SandwichStacker" />
  </div>
);

export default logo;
