import React from 'react';
import styles from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from "../Toolbar/Toolbar";

const layout = props => {
    return (
        <Auxiliary>
            <Toolbar />
            <main className={styles.content}>
                {props.children}
            </main>
        </Auxiliary>
    );
}

export default layout;