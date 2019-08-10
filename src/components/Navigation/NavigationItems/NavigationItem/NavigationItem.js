import React from "react";
import styles from "./NavigationItem.module.css";
import PropTypes from "prop-types";

const navigationItem = props => (
  <li className={styles.navigationItem}>
    <a href={props.link}>{props.children}</a>
  </li>
);

navigationItem.propTypes = {
    link: PropTypes.string.isRequired
};

export default navigationItem;