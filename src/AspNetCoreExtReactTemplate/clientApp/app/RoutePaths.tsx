import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Redirect, Switch } from 'react-router-dom';

import { About } from './about/About';
import { Login } from './login/Login';
import { ErrorPage } from './error/ErrorPage';



export class RoutePaths {    
    public static SignIn: string = "/login/";
    public static About: string = "/about/";
}

export default class Routes extends React.Component<any, any> {
    render() {
        return <Switch>            
             <Route  path={RoutePaths.SignIn} component={Login} />
             <Route  path={RoutePaths.About} component={About} />
             <Route path='/error/:code?' component={ErrorPage} />
             <DefaultLayout path='/test/' component={ErrorPage} /> 
            </Switch>
    }
}

const DefaultLayout = ({ component: Component, ...rest }: { component: any, path: string, exact?: boolean }) => (
    <Route {...rest} render={props => (

        <Redirect to= {{
            pathname: RoutePaths.SignIn,
            state: {from: props.location}
        }} />
    )} />
);
