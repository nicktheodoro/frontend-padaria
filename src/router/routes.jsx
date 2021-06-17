import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/main";
import Details from "../pages/details";

export default function Routes () {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  </BrowserRouter>
  )
};
