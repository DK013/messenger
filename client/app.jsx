import ChatApp from './modules/pages/chatApp.jsx';
import UserPage from './modules/pages/userPage.jsx';
import client from './backend/client.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
    

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  // componentDidMount() {
  //   client.authenticate().catch(() => {this.setState({ login: true });});
  //   client.on('authenticated', () => {
  //     this.setState({ login: false });
  //   });
  // }

  render() {

      return(
        <Router>
          <switch>
              
              <Route path='/' component={UserPage}/>
              <p>{this.state.error && this.state.error.message}</p>
          </switch>
        </Router>
      );
    }
 }

ReactDOM.render(<App/>, document.getElementById('root'));
