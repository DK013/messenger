import React from 'react';
import UserList from '../users/UserList.jsx';
import MessageList from '../messages/MessageList.jsx';
import ComposeMessage from '../messages/ComposeMessage.jsx';
import client from '../../backend/client.js';

//ChatApp
export default class ChatApp extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = { };
    };

    componentDidMount() {
        const messages = client.service('messages');
        const users = client.service('users');

        client.authenticate().catch( () => {this.setState({ login: null });});

            // On successfull login
        client.on('authenticated', login => {
            // Get all users and messages
            Promise.all([
            messages.find({
                query: {
                $sort: { createdAt: -1 },
                $limit: 25
                }
            }),
            users.find()
            ]).then( ([ messagePage, userPage ]) => {
            // We want the latest messages but in the reversed order
            var messages = messagePage.data.reverse();
            var users = userPage.data;
    
            // Once both return, update the state
            this.setState({ login, messages, users });
            });
        });
        // On logout reset all all local state (which will then show the login screen)
        client.on('logout', () => this.setState({
            login: null,
            messages: null,
            users: null
        }));
    
        // Add new messages to the message list
        messages.on('created', message => this.setState({
            messages: this.state.messages.concat(message)
        }));
    
        // Add new users to the user list
        users.on('created', user => this.setState({
            users: this.state.users.concat(user)
        }));
        
    }

    render() {
    return (
        <div className="flex flex-row flex-1 clear">
            <UserList users={this.state.users} />
            <MessageList users={this.state.users} messages={this.state.messages} />
        </div>
        );
    }
}

ChatApp.contextTypes = {
      router: React.PropTypes.object.isRequired
}
