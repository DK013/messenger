import ChatApp from './modules/pages/chatApp.jsx';
import UserPage from './modules/pages/userPage.jsx';
// import client from './backend/client.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
    

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { };
  // }

  // componentWillMount() {
  //   client.authenticate().catch(() => {
  //     this.setState({ notAuthenticated: true });
  //   });
  //   client.on('authenticated', () => {
  //     this.setState({ notAuthenticated: false });
  //   });
  // }

  render() {

      return(
        <Router>
          <switch>
              <Route exact path='/' component={UserPage}/>
              <Route exact path='/messages' component={ChatApp}/>
          </switch>
        </Router>
      );
    }
 }

ReactDOM.render(<App/>, document.getElementById('root'));
