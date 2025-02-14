import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Acervo from './Acervo';
import Cadastro from './Cadastro';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Home} />
      <Route path='/acervo' component={Acervo} />
      <Route path='/cadastro' component={Cadastro} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
