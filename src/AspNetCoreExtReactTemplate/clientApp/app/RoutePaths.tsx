import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Redirect, Switch } from 'react-router-dom';

import { About } from './about/About';



export class RoutePaths {    
    public static SignIn: string = "/";
    public static About: string = "/about/";
}

export default class Routes extends React.Component<any, any> {
    render() {
        return <Switch>
             <Route  path={RoutePaths.About} component={About} />

             {/* <Route path='/error/:code?' component={ErrorPage} /> */}
            </Switch>
    }
}
