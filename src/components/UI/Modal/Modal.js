import React, { Component } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";



class Modal extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.purchasing !== this.props.purchasing;
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop doesModalShow={this.props.purchasing} clicked={this.props.backdropHandler} />
                <div 
                    className={styles.modal}
                    style={{
                        transform: this.props.purchasing ? "translate(0)" : "translateY(-200vH)",
                        opacity: this.props.purchasing ? "1" :"0"
                    }}>
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
};

export default Modal;