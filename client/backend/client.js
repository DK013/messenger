import io from 'socket.io-client';
import feathers from 'feathers-client';
import authentication from 'feathers-authentication-client';

const socket = io();
const client = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    storage: window.localStorage
  }));
export default client;