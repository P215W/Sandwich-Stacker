import React, { Component } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";



class Modal extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.loading !== this.props.loading;
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop doesModalShow={this.props.show} clicked={this.props.backdropHandler} />
                <div 
                    className={styles.modal}
                    style={{
                        transform: this.props.show ? "translate(0)" : "translateY(-200vH)",
                        opacity: this.props.show ? "1" :"0"
                    }}
                >
                    {this.props.show ? this.props.children : null}
                </div>
            </Auxiliary>
        );
    }
};

export default Modal;