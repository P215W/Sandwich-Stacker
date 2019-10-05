import React, { Component } from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (Comp, axios) => {
    return class extends Component {
        constructor(props) {
            super();

            this.state = {
                error: null
            };

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, err => {
                this.setState({error: err});
                // return err;
            });
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        confirmErrorHandler = () => {
            this.setState({error: null});
        };

        render () {
            return (
                <Auxiliary>
                    <Modal show={this.state.error} backdropHandler={this.confirmErrorHandler}>
                        { this.state.error ? this.state.error.message : null }
                    </Modal>
                    <Comp {...this.props} />
                </Auxiliary>
            );
        }
    };
};
    
export default withErrorHandler;