import React from "react";
import styles from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const navigationItem = props => (
  <li className={styles.navigationItem}>
    <NavLink activeClassName={styles.active} exact={props.exact} to={props.link}>{props.children}</NavLink>
  </li>
);

navigationItem.propTypes = {
    link: PropTypes.string.isRequired
};

export default navigationItem;