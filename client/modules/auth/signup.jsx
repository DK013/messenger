import React from 'react';
import client from '../../backend/client.js';
import { Redirect, Link } from 'react-router-dom';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  updateField(name, event) {
    this.setState({ [name]: event.target.value });
  }

  signup() {
    const { f_name, l_name, nickname, email, password } = this.state;

    return client.service('users').create({
      f_name: f_name,
      l_name: l_name,
      nickname: nickname,
      email: email,
      password: password
    }).then(() =>{
      this.setState({ isRegistered: true });
      alert("Registration Successful");
    }).catch(error => {this.setState({ error });});
  }

  render() {
      return(
          <div className="col-md-8 offset-md-8 text-left side_signing_full">
            <form className="form-signin1 form-signup1 full_side text-white " autoComplete="off">
                <h2 className="tex-black mb-4">Sign Up</h2>
                <label  className="sr-only">First Name</label>
                <input type="text" name="f_name" className="form-control" placeholder="First Name" onChange={ev => this.updateField('f_name', ev)}/>
                <br/>
                <label  className="sr-only">Last Name</label>
                <input type="text" name="l_name" className="form-control" placeholder="Last Name" onChange={ev => this.updateField('l_name', ev)}/>
                <br/>
                <label  className="sr-only">Nickname</label>
                <input type="text" name="nickname" className="form-control" placeholder="Nickname" onChange={ev => this.updateField('nickname', ev)}/>
                <br/>
                <label  className="sr-only">Email address</label>
                <input type="email" name="email" className="form-control" placeholder="Email address" onChange={ev => this.updateField('email', ev)}/>
                <br/>
                <label className="sr-only">Password</label>
                <input type="password" name="password" className="form-control" placeholder="Password" onChange={ev => this.updateField('password', ev)}/>
                <br/>
                <button type="button" className="btn btn-lg btn-primary btn-round" onClick={() => this.signup()}>Sign Up</button> 
                <br/>
                <p>{this.state.error && this.state.error.message}</p>
                <p className="mt-3"><a href="#" className="">Forgot password?</a></p>
            </form>
            <br/>
            {this.state.isRegistered && <Redirect to='/login'/>}
            </div>
      );
  }
}