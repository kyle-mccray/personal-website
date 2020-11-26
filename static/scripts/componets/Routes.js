import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import NotFound from "./NotFound";


const Routes = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/skills' component={Skills} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Routes;