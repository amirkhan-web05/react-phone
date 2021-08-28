import React from 'react';
import Header from './components/Header';
import { Home, About } from './components/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShopCart from './components/pages/ShopCart';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact component={Home} path="/"></Route>
          <Route component={About} path="/about"></Route>
          <Route component={ShopCart} path="/shopcart"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
