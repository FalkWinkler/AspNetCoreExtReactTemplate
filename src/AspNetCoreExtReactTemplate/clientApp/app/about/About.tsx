import * as React from 'react'
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { Button, Dialog } from '@extjs/reactor/modern';
import { renderWhenReady } from '@extjs/reactor';

export class About extends React.Component<RouteComponentProps<any>, any> {
    state = {  
        showDialog: true,      
        errors: {} as { [key: string]: string }
    }

    onOk = () => {
        this.setState({ showDialog: false });
    }
    render() {
        const { showDialog } = this.state;
        return (
            <Dialog     
            title="About" padding="20" disabled={false}
            closeAction="hide"
            displayed={showDialog}
            onHide={() => this.setState({ showDialog: false })} >
            <h1>About this App</h1>
            <p>
                TODO
            </p>
            <Button itemId="ok" text="OK" handler={this.onOk}/>
           </Dialog>
        );
    };
}

export default renderWhenReady(About);