import * as React from 'react'
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { Image ,Container,TitleBar ,Panel, TextField , Button, Menu,MenuItem, Dialog,MessageBox } from '@extjs/reactor/modern';
import { renderWhenReady } from '@extjs/reactor';
import { About } from './about/About';
import Routes from './RoutePaths';
class Layout extends React.Component<RouteComponentProps<any>, any> {
    state = {
        showDialog: false
    }

    onLoginClicked = () => { 
        MessageBox.bind(this,"Test");
        console.log("button clicked");       
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

    render() {
        const { showDialog } = this.state;
        return (
            <Container fullscreen layout="fit">              
                
                <TitleBar title="Identityservice" docked="top" >
                   
                    <Button margin="10" docked="right" titel="Login" text="Login" handler={this.showDialog}  ></Button>
                </TitleBar>
                <Dialog                 
                 title="Login"
                 closeAction="hide"
                 maskTapHandler={this.onCancel} 
                 displayed={showDialog}
                 onHide={() => this.setState({ showDialog: false })}
                 >

                 <TextField label="Username" inputType="textfield"></TextField>
                 <TextField label="Password" inputType="password" ></TextField>
                
                    <Button text="Cancel" handler={this.onCancel}/>
                    <Button itemId="ok" text="OK" handler={this.onOk}/>
                </Dialog> 
                <Routes /> 
                {this.props.children}
            </Container>           
        )
    }
}

export default renderWhenReady(Layout);