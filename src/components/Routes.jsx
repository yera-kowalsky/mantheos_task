import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import DataFiles from '../pages/DataFiles';


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/datafiles' component = {DataFiles}/>
        </Switch>
    )
}

export default Routes
