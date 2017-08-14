import React from 'react';
import client from '../../backend/client.js';

//UserList
export default class UserList extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() {
    const users = this.props.users;
    const PLACEHOLDER = 'https://placeimg.com/60/60/people';

  return(
      <aside className="sidebar col col-3 flex flex-column flex-space-between">
      <header className="flex flex-row flex-center">
        <h4 className="font-300 text-center">
          <span className="font-600 online-count">{users.length}</span> Users
        </h4>
      </header>

      <ul className="flex flex-column flex-1 list-unstyled user-list">
        {users.map(user => <li key={user.id}>
          <a className="block relative" href="#">
            <img src={user.avatar} alt={user.email} className="avatar" />
            <span className="absolute username">{user.nickname}</span>
          </a>
        </li>)}
      </ul>
      <footer className="flex flex-row flex-center">
        <a href="#" onClick={() => client.logout()} className="button button-primary">
          Sign Out
        </a>
      </footer>
    </aside>
    );
  }
}
