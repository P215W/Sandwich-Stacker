import React, {Component} from "react";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-order";

class Orders extends Component {

    state = {
        loading: true,
        // orders: [],
        error: false,
        errorMsg: "",
        orders: [
            { customer: "Marc", ingredients: [ {salad: 2}, {meat: 1} ], price: 4 },  // one order
            { customer: "Marc", ingredients: [ {salad: 0}, {meat: 2} ], price: 5 }  // one order
        ]
    };


    componentDidMount() {
        axios.get("/orders.json") // userID
            .then(res => {
                console.log("Response object: ", res);
                let orderArr = [];
                for (let order in res.data) {
                    console.log("ORDER: ", order);
                    console.log("2", res.data[order]);
                    let ingArr = [];
                    for ( let ingredient in res.data[order].ingredients ) {
                        let ingObj = {};
                        // let ingredientName = ingredient;
                        ingObj[ingredient] = res.data[order].ingredients[ingredient];
                        ingArr.push(ingObj);
                    }
                    console.log("ingAaray", ingArr);
                    let orderItem = {
                        price: parseFloat(res.data[order].price).toFixed(2),
                        ingredients: ingArr,
                        id: order
                    };
                    orderArr.push(orderItem);
                }
                console.log("orderArray", orderArr);
                this.setState({
                    loading: false,
                    orders: orderArr
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: true,
                    errorMsg: err.message
                });
            });
    };

    render() {
        let content = (
            this.state.orders.map(o => (
                <Order key={o.id} price={o.price} ingredients={o.ingredients} />
            ))
        );
        if (this.state.loading) {
            content = <Spinner />
        } else if (this.state.error) {
            content = "Sorry, at the moment there is an error: " + this.state.errorMsg;
        }

        return content;
            // // <div>
            // //     {this.state.orders.map(o => (
            // //         <Order ingredients={o.ingredients} price={o.price} />
            // //     ))}
            // // </div>
            // <Order />);
    }
};

export default Orders;
