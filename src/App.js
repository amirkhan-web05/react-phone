import React from 'react';
import Header from './components/Header';
import { Home, ShopCart } from './components/pages/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact component={Home} path="/"></Route>
          <Route component={ShopCart} path="/shopcart"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
