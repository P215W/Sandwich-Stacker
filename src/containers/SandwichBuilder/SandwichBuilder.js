import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary";

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
    ingredients: {
      //   8 ingredient types
      friedEgg: 0,
      tomato: 0,
      pickle: 0,
      lettuce: 0,
      cucumber: 0,
      bacon: 0,
      cheese: 0,
      turkey: 0
    },
    totalPrice: 4,
    purchasable: true,
    purchasing: false
  };

  checkPurchasability = updIngredients => {
    const sum = Object.values(updIngredients)
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    this.setState({
      purchasable: sum > 0
    })
  }

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
    this.setState({purchasing: true});
  };

  backdropHandler = () => {
    this.setState({purchasing: false});
  };

  render() {
    const disabledInfo = {
      // for disabling a "Less"-btn if a quant. is less than zero
      ...this.state.ingredients
    };
    for (let ing in disabledInfo) {
      disabledInfo[ing] = disabledInfo[ing] <= 0;
    }

    return (
      <Auxiliary>
        <Modal purchasing={this.state.purchasing} backdropHandler={this.backdropHandler}>
          <OrderSummary ingredients={this.state.ingredients} backdropHandler={this.backdropHandler} totalPrice={this.state.totalPrice} />
        </Modal>
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
  }
}

export default SandwichBuilder;
