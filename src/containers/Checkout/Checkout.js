import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  constructor(props) {
    super(props);

    const initIngredients = {};
    const query = new URLSearchParams(this.props.location.search);
    let initTotalPrice;
    for (let param of query.entries()) {
      if (param[0] === "totalPrice") {
        initTotalPrice = +param[1];
      } else {
        initIngredients[param[0]] = +param[1]; // + turns the digit of string type into number type
      }
    }

    this.state = {
      ingredients: initIngredients,
      totalPrice: initTotalPrice
    };
  }

  // the code of the following componentWillMount lifecycle method
    // was moved to the constructor function since it should run when component gets mounted
    
  //   componentWillMount() {
  //     const ingredients = {};
  //     const query = new URLSearchParams(this.props.location.search);
  //     let price;
  //     for (let param of query.entries()) {
  //       console.log("param", param);
  //       if (param[0] === "totalPrice") {
  //           price = +param[1];
  //       } else {
  //       ingredients[param[0]] = +param[1];  // + turns the digit of string type into number type
  //       }
  //     }
  //     this.setState({
  //       ingredients: ingredients,
  //       totalPrice: price
  //     });
  //   }

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  render() {
    console.log("PROPS", this.props);

    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
