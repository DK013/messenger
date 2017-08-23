import React from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import ToggleDisplay from 'react-toggle-display';
import Login from '../auth/login.jsx';
import Signup from '../auth/signup.jsx';
// import client from '../../backend/client';


export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
      }
    
    // componentDidMount() {
    //     client.authenticate().catch(() => {this.setState({ login: null });});
    //     client.on('authenticated', () => {
    //       this.context.router.history.push('/messages');
    //     });
    // }

    handleClick() {
        this.setState({
          show: !this.state.show
        });
    }

    render() {
        return(
            <div className="fullheight">
            <figure className="background"> <img src="../img/login_bg.jpg" alt=""/> </figure>
            <header className="navbar-fixed">
            <nav className="navbar navbar-toggleable-md sign-in-header">
            <div className="sidebar-left">  <a className="navbar-brand imglogo" href="index.html"></a> </div>
            <div className="col"></div>
            <div className="sidebar-right pull-right" >
                <ul className="navbar-nav  justify-content-end">
                <li><span className="btn btn-link text-white" >{this.state.show ? ("Need an account ?") : ("Already have an account ?")}</span></li>
                <li><button className="btn btn-primary" onClick={ () => this.handleClick() }>{this.state.show ? ("Sign Up") : ("Log In")}</button></li>
                </ul>
            </div>
            </nav>
            </header>
            <div className="wrapper-content-sign-in p-0">
                <ToggleDisplay show={this.state.show} tag="section">
                    <Login/>
                </ToggleDisplay>
                <ToggleDisplay hide={this.state.show} tag="section">
                    <Signup/>
                </ToggleDisplay>
            </div>
            </div>
        );
    }
}

UserPage.contextTypes = {
      router: React.PropTypes.object.isRequired
}
