import * as React from 'react'
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { Button, Dialog } from '@extjs/reactor/modern';
import { renderWhenReady } from '@extjs/reactor';

export class About extends React.Component<RouteComponentProps<any>, any> {
    state = {        
        errors: {} as { [key: string]: string }
    }
    render() {

        return (
            <Dialog        
            title="About" padding="20" >
            <h1>About this App</h1>
            <p>
                TODO
            </p>
           </Dialog>
        );
    };
}

export default renderWhenReady(About);