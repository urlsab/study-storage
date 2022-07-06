import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} /> 
          </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;


// Compo's: ::
// Navbar:
// -login/logout(if)
//  Babysitter search
// Register as babysitter

// Img background for home page
// Img background all babysitters
// Img background register

// Home page
// Sentence wellcome
// Button register
// Searchline
// Button login