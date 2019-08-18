import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';

import Home from './Home';
import Cardapio from './pedidos/Cardapio';
import Personalizar from './pedidos/Personalizar';
import ShowAll from './extras/ShowAll';
import DeleteById from './extras/DeleteById';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
		<Switch>
			<Route path="/" exact={true} component={Home} />
      <Route path="/Cardapio" component={Cardapio} />
      <Route path="/Personalizar" component={Personalizar} />
      <Route path="/ShowAll" component={ShowAll} />
      <Route path="/DeleteById" component={DeleteById} />
		</Switch>
	</BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
