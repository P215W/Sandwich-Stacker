import React, { Component } from 'react';
import styles from './Layout.module.css';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from "../../components/Toolbar/Toolbar";
import SideDrawer from '../../components/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        isSideDrawerOpen: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({isSideDrawerOpen: false});
    }

    sideDrawerOpenHandler = () => {
        // this.setState({isSideDrawerOpen: !this.state.isSideDrawerOpen});
        this.setState( (prevState) => {
            return {isSideDrawerOpen: !prevState.isSideDrawerOpen};
        });
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar menuHandler={this.sideDrawerOpenHandler} />
                <SideDrawer
                    closeSide={this.sideDrawerCloseHandler}
                    isSideDrawerOpen={this.state.isSideDrawerOpen}
                />
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    };
};

export default Layout;