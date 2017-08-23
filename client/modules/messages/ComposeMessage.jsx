import React from 'react';
// import client from '../../backend/client.js';

export default class ComposeMessage extends React.Component {
    constructor(props) {
    super(props);

        this.state = {
        text: ''
        };

    };

    updateText(ev) {
        this.setState({text: ev.target.value});
    }

    // sendMessage(ev) {
    //     if (this.state.text.length > 0) {
    //     const messageService = client.service('messages');
    //     client.authenticate().then( () => {
    //         messageService.create({
    //         text: this.state.text
    //         }).then(() => this.setState({text: ''}));

    // }).catch( (err) => {
    //         console.error(err);
    //     });
    //      }

    // };

    render() {
        return( 
            <form className="flex flex-row flex-space-between">
                <input type="text" name="text" className="flex flex-1" value={this.state.text} onChange={this.updateText} />
                <button className="button-primary" type="button" onClick={ev => this.sendMessage(ev)}>Send</button>
            </form>
        );
    };
}
