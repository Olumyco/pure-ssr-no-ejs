import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Message from './components/Message';


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/message' component={Message} />
        </Switch>
    );
};

export default Routes;