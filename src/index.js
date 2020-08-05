import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FirstPage from './pages/1_FirstPage/FirstPage';
import Authorization from './pages/2_Authorization/Authorization';
import Account from './pages/3_Account/Account';
import Ballance from './pages/4_Ballance/Ballance';
import Spend from './pages/4_Ballance/Spend';
import User from './pages/5_User/User';


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



