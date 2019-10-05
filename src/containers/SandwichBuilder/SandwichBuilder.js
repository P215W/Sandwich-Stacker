import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";  // until here: test if spinner works if loadng is set to true (frist as  test, then by the continue method) 
import styles from "./SandwichBuilder.module.css";
import axios from "../../axios-order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICE = {
  friedEgg: 0.5,
  tomato: 0.3,
  pickle: 0.3,
  lettuce: 1,
  cucumber: 0.3,
  bacon: 0.7,
  cheese: 0.7,
  turkey: 1.3
};

class SandwichBuilder extends Component {
  state = {
    ingredients: null, 
      //   8 ingredient types
      // { friedEgg: 0,
      // tomato: 0,
      // pickle: 0,
      // lettuce: 1,
      // cucumber: 1,
      // bacon: 1,
      // cheese: 1,
      // turkey: 1
    // },
    totalPrice: 8,
    purchasable: true,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount () {
    axios.get("/ingredients.json")
      .then(res => {
        this.setState({ingredients: res.data});
      })
      .catch(err => {
        this.setState({error: true});
      });
  };

  checkPurchasability = updIngredients => {
    const sum = Object.values(updIngredients).reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    this.setState({
      purchasable: sum > 0
    });
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]; // for updating an ingredient count
    const newCount = oldCount + 1;
    const ingredientsCopy = {
      ...this.state.ingredients
    };
    ingredientsCopy[type] = newCount;

    const priceForIng = INGREDIENT_PRICE[type]; // for updating the total price
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceForIng;

    this.setState({
      ingredients: ingredientsCopy,
      totalPrice: newPrice
    });
    this.checkPurchasability(ingredientsCopy);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]; // for updating an ingredient count
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const ingredientsCopy = {
      ...this.state.ingredients
    };
    ingredientsCopy[type] = newCount;

    const priceForIng = INGREDIENT_PRICE[type]; // for updating the total price
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceForIng;

    this.setState({
      ingredients: ingredientsCopy,
      totalPrice: newPrice
    });
    this.checkPurchasability(ingredientsCopy);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  backdropHandler = () => {
    this.setState({ purchasing: false });
  };

  
  continueHandler = () => {
    // this.setState({
    //   loading: true
    // });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Test Name",
    //     adress: {
    //       street: "Teststreet 1",
    //       zipcode: 12345,
    //       country: "Belgium"
    //     },
    //     email: "test@test.com"
    //   }
    // };
    // axios.post("/orders.json", order)
    //   .then(res => {
    //     console.log(res);
    //     this.setState({ loading: false, purchasing: false });
    //   });

    //   .catch(err => {
    //     this.setState({ loading: false, purchasing: false });
    // });
    // example for deletion
    // axios.delete("/orders/-LmT0URTMXITlDZIoT6l.json");

    // this.props.history.push("/checkout");

    const query = [];
    for (let i in this.state.ingredients) {
      // salad: 1
      let data = encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]);
      // let data = i + "=" + this.state.ingredients[i];
      query.push(data);
    }
    query.push("totalPrice=" + this.state.totalPrice);
    console.log("query: ", query);
    const queryString = query.join("&");
    console.log("queryString: ", queryString);

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
    
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients    // for disabling a "Less"-btn if a quant. is less than zero
    };
    for (let ing in disabledInfo) {
      disabledInfo[ing] = disabledInfo[ing] <= 0;
    }

    let sandwich = this.state.error ? <p>We are sorry, ingredients can't be loaded at the moment.</p> : <Spinner />;
    let orderSummary = null;

    if (this.state.ingredients) {
      sandwich = (
        <Auxiliary>
          <Sandwich ingredients={this.state.ingredients} />
          <BuildControls
            price={this.state.totalPrice}
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            isDisabled={disabledInfo}
            purchasable={this.state.purchasable}
            purchasing={this.purchasingHandler}
          />
        </Auxiliary>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          backdropHandler={this.backdropHandler}
          continueHandler={this.continueHandler} />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          loading={this.state.loading}
          backdropHandler={this.backdropHandler}
        >
          {orderSummary}
        </Modal>
        <div className={styles.main}>
          {sandwich}
        </div>
      </Auxiliary>
    );
  };
};

export default withErrorHandler(SandwichBuilder, axios);