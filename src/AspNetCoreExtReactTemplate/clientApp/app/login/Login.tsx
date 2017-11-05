import * as React from 'react'
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { Button, Dialog, TextField,Container } from '@extjs/reactor/modern';
import { renderWhenReady } from '@extjs/reactor';

export class Login extends React.Component<RouteComponentProps<any>, any> {
    state = {
        showDialog: true
    }

    showDialog = () => {
        this.setState({ showDialog: true });
    }
    onOk = () => {
        this.setState({ showDialog: false });
    }
    onCancel = () => {
        this.setState({ showDialog: false });
    }
    render()
    {         
        const { showDialog } = this.state;

        return (
            <Container fullscreen layout="fit">
                <Dialog                 
                title="Login"
                closeAction="hide"
                maskTapHandler={this.onCancel} 
                disabled={false}               
                displayed={showDialog}
            onHide={() => this.setState({ showDialog: false })}
                >

                <TextField label="Username" inputType="textfield"></TextField>
                <TextField label="Password" inputType="password" ></TextField>
            
                <Button text="Cancel" handler={this.onCancel}/>
                <Button itemId="ok" text="OK" handler={this.onOk}/>
            </Dialog>
       </Container>
        )
    };
}