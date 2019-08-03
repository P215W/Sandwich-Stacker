import React from "react";
import styles from "./Logo.module.css";
import LogoImage from "../../assets/LogoImage.PNG";

const logo = props => {
  return (
    <div className={styles.logo}>
        <img src={LogoImage} alt="SandwichStacker"/>
    </div>
  );
};

export default logo;
