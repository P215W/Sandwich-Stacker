import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import styles from './Layout.module.css';

const layout = props => {

    return (
        <Auxiliary>
            {/* <span>Toolbar, Sidedrawer, Backdrop</span> */}
            <main className={styles.content}>
                {props.children}
            </main>
        </Auxiliary>
    );
}

export default layout;