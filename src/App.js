import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

function App () {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" component={SandwichBuilder} />
          </Switch>
        </Layout>
      </div>
    );
};

export default App;
