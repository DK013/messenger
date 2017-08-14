import React from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import Login from '../auth/login.jsx';
import Signup from '../auth/signup.jsx';


export default class UserPage extends React.Component {
    render() {
        return(
            <div className="fullheight">
                <figure className="background"> <img src="img/login_bg.jpg" alt=""/> </figure>
                <header className="navbar-fixed">
                <nav className="navbar navbar-toggleable-md sign-in-header">
                <div className="sidebar-left">  <a className="navbar-brand imglogo" href="index.html"></a> </div>
                <div className="col"></div>
                <div className="sidebar-right pull-right" >
                    <ul className="navbar-nav  justify-content-end">
                    <li><a href="https://github.com/DK013/messenger/blob/master/README.md" className="btn btn-link text-white" >Need Help ?</a></li>
                    <li><Link to="/user/signup" className="btn btn-primary " >Register</Link></li>
                    </ul>
                </div>
                </nav>
                </header>
                <div className="wrapper-content-sign-in p-0">
                <Route path='/user/login' component={Login}/>
                <Route path='/user/signup' component={Signup}/>
                <Redirect from='/user' to='/user/login'/>
                </div>
            </div>
        );
    }
}

UserPage.contextTypes = {
      router: React.PropTypes.object.isRequired
}
