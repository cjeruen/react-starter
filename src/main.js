
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';


import App from './jsx/App';
import Home from './jsx/Home/Home';

import Login from './jsx/Auth/Login';
import Register from './jsx/Auth/Register';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
        </Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
    </Router>
), document.getElementById('app'));

