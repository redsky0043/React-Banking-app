import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FirstPage from './pages/firstPage.js';
import Authorization from './pages/authorization.js';
import Account from './pages/account.js';
import Ballance from './pages/ballance.js';
import Spend from './pages/spend.js';
import User from './pages/user';


ReactDOM.render((
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={FirstPage} />
          <Route path='/authorization' component={Authorization} />
          <Route path='/account' component={Account} />
          <Route path='/ballance' component={Ballance} />
          <Route path='/spend' component={Spend} />
          <Route path='/user' component={User} />
        </Switch>
      </BrowserRouter>  
  ), document.getElementById('root')
 );



