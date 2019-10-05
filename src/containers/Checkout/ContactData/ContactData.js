import React, { Component } from "react";
import styles from "./ContactData.module.css";
import Button from "../../../components/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { withRouter } from "react-router-dom";
import axios from "../../../axios-order";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  submitHandler = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    console.log("INGREDIENTS: ", this.props.ingredients);
    console.log("TOTAL PRICE: ", this.props.totalPrice);
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: "Test Name",
        adress: {
          street: "Teststreet 1",
          zipcode: 12345,
          country: "Belgium"
        },
        email: "test@test.com"
      }
    };
    axios.post("/orders.json", order)
      .then(res => {
        console.log(res);
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({ loading: false });
    });
  }

  render() {
      console.log("[ContactData.js]", this.props);
      let form = (
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="name" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postalCode" placeholder="Postal Code" />
          <Button btnType="success" clicked={this.submitHandler}>Order</Button>
        </form>
      );
    if (this.state.loading) {
        form = <Spinner />;
    }
    return (
      <div className={styles.contactData}>
        <h4>Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default withRouter(ContactData);
