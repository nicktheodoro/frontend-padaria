import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/home";
import Products from "../pages/products";
import Register from "../pages/products/register";
import Cart from "../pages/cart";
import Details from "../pages/details";


export default function Routes () {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/register" component={Register} />
      <Route path="/products/:id/details" component={Details} />
      <Route exact path="/about" component={Cart} />
    </Switch>
  </BrowserRouter>
  )
};
