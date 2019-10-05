// import React, { Component } from "react";
// import styles from "./Modal.module.css";
// import Backdrop from "../Backdrop/Backdrop";
// import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

// class Modal extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     return (
//       nextProps.show !== this.props.show ||
//       nextProps.loading !== this.props.loading
//     );
//   }

//   render() {
//     return (
//       <Auxiliary>
//         <Backdrop
//           doesModalShow={this.props.show}
//           clicked={this.props.backdropHandler}
//         />
//         <div
//           className={styles.modal}
//           style={{
//             transform: this.props.show ? "translate(0)" : "translateY(-200vH)",
//             opacity: this.props.show ? "1" : "0"
//           }}
//         >
//           {this.props.show ? this.props.children : null}
//         </div>
//       </Auxiliary>
//     );
//   }
// }

// export default Modal;


// trial here with CSS Aphrodite:
import React, { Component } from "react";
// import styles from "./Modal.module.css";
import { css, StyleSheet } from "aphrodite";
import Backdrop from "../Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.loading !== this.props.loading
    );
  }

    stylesAphrodite = StyleSheet.create({
        modal: {
            position: "absolute",
            zIndex: "500",
            backgroundColor: "white",
            width: "70%",
            border: "1px solid #ccc",
            boxShadow: "1px 1px 1px black",
            padding: "16px",
            left: "15%",
            top: "30%",
            boxSizing: "border-box",
            transition: "all 0.3s ease-out",
            "@media (min-width: 650px)": {
                width: "650px",
                left: "calc(50% - 320px)",
                border: "2px solid orange"
            }
        }
    });

  render() {
    return (
      <Auxiliary>
        <Backdrop
          doesModalShow={this.props.show}
          clicked={this.props.backdropHandler}
        />
        <div
          className={css(this.stylesAphrodite.modal)}
        // className={styles.modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-200vH)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.show ? this.props.children : null}
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;
