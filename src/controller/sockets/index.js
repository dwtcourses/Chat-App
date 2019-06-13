import { ADD_USER, INITIAL_DATA, ADD_MESSAGE, USERS_LIST } from '../../constants/actionsTypes';
import { initialLoad, populateUsersList, messageReceived, userDisconected } from '../actions';

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket('wss://chat-app-121.herokuapp.com');

  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: ADD_USER,
        name: username
      })
    );
  };

  socket.onmessage = event => {
    const data = JSON.parse(event.data);

    switch (data.type) {
      case INITIAL_DATA:
        dispatch(initialLoad(data));
        break;
      case ADD_MESSAGE:
        delete data.type;
        dispatch(messageReceived(data));
        break;
      case USERS_LIST:
        dispatch(populateUsersList(data.users));
        break;
      default:
        break;
    }
  };

  socket.onclose = () => {
    console.log('Disconected due to the unactivity:');
    dispatch(userDisconected());
  };

  return socket;
};

export default setupSocket;