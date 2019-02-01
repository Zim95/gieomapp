import React, { Component } from 'react';

//Routing
import {Switch, Route} from 'react-router-dom';

//Importing components
import Layout from './hoc/Layout';
import Main from './containers/Main/main';
import Cart from './containers/Cart/cart';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
