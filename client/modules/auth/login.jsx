import React from 'react';
import client from '../../backend/client.js';
import { Redirect, Link, withRouter } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  updateField(name, event) {
    this.setState({ [name]: event.target.value });
  }

  login() {
    const { email, password } = this.state;
    
    return client.authenticate({
      strategy: 'local',
      email, password
    }).then(response => {
      return client.passport.verifyJWT(response.accessToken);
    })
    .then(payload => {
      return client.service('users').get(payload.userId);
    })
    .then(user => {
      console.log('User', client.get('user'));
    }).then(() => {
      this.context.router.history.push('/');
    }).catch(error => {this.setState({ error });});

  }

  render() {
      return(
          <div className="col-md-8 offset-md-8 text-left side_signing_full">
            <form className="form-signin1 full_side text-white">
              <h2 className="tex-black mb-4">Sign in</h2>
              <label  className="sr-only">Email address</label>
              <input type="email" name="email" className="form-control" placeholder="Email address"  onChange={ev => this.updateField('email', ev)}/>
              <br/>
              <label className="sr-only">Password</label>
              <input type="password" name="password" className="form-control" placeholder="Paassword"  onChange={ev => this.updateField('password', ev)}/>
              <br/>
              <button type="button" className="btn btn-lg btn-primary btn-round" onClick={() => this.login()}>Sign in</button> <br/>
              <br/>
              <p>{this.state.error && this.state.error.message}</p>
              <p className="mt-3"><Link to="/user/signup" className="text-white">Signup here!</Link> <br/>
                <a href="sign-in6.html" className="">Forgot password?</a></p>
            </form>
            <br/>
        </div>
      )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}
