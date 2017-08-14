import React from 'react';
import client from '../../backend/client.js';
import moment from 'moment';

export default class MessageList extends React.Component {

    
    sendMessage(ev) {
        const input = ev.target.querySelector('[name="text"]');
        const text = input.value.trim();
    
        if(text) {
          client.service('messages').create({ text }).then(() => {
            input.value = '';
          });
        }
    
        ev.preventDefault();
    }
        
    scrollToBottom() {
        const chat = this.chat;
    
        chat.scrollTop = chat.scrollHeight - chat.clientHeight;
    }
    
    componentDidMount() {
        this.scrollToBottom = this.scrollToBottom.bind(this);
    
        client.service('messages').on('created', this.scrollToBottom);
        this.scrollToBottom();
    }
    
    componentWillUnmount() {
        // Clean up listeners
        client.service('messages').removeListener('created', this.scrollToBottom);
    }

    render() {
        const { messages, users } = this.props;
        return(
            <div className="flex flex-column col col-9">
            <main className="chat flex flex-column flex-1 clear" ref={main => { this.chat = main; }}>
                {messages.map(message => <div key={message.id} className="message flex flex-row">
                <img src={message.user.avatar} alt={message.user.email} className="avatar" />
                <div className="message-wrapper">
                    <p className="message-header">
                    <span className="username font-600">{message.user.email}</span>
                    <span className="sent-date font-300">{moment(message.createdAt).format('MMM Do, hh:mm:ss')}</span>
                    </p>
                    <p className="message-content font-300">{message.text}</p>
                </div>
                </div>)}
            </main>
            <form onSubmit={this.sendMessage.bind(this)} className="flex flex-row flex-space-between" id="send-message">
                <input type="text" name="text" className="flex flex-1" />
                <button className="button-primary" type="submit">Send</button>
            </form>
            </div>
        );
    }
}
