import { connect } from 'react-redux';
import { ChatWindow } from '../ChatWindow';

export const SUBSCRIBE_TO_CHAT = 'SUBSCRIBE_TO_CHAT';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const defaultState = {
  messages: [
    'tesing',
    '2ks',
    'hehe',
  ],
}

export const chatReducer = (state = defaultState, action) => {
  const { type } = action;
  switch(type) {
    case RECEIVE_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case SEND_MESSAGE: 
      return state;
    default: return state;
  }
}

const selector = state => ({messages: state.chat.messages});

export const Chat = connect(selector)(ChatWindow);
