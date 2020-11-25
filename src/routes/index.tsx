import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Contato from '../views/Contato';
import Home from '../views/Home';
import Portfolio from '../views/Portfólio';
import Produtos from '../views/Produtos';
import Sobre from '../views/Sobre';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/sobre" exact component={Sobre}></Route>
        <Route path="/produtos" exact component={Produtos}></Route>
        <Route path="/portfólio" exact component={Portfolio}></Route>
        <Route path="/contato" exact component={Contato}></Route>
      </Switch>
    </BrowserRouter>
  );
}
