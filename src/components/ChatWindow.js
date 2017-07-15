import React, { Component }from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ChatMessageContainer } from './ChatMessageContainer';

const ChatWindowWrapper = styled.div`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
`;

const Message = styled.div`

`;

let socket;

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    socket = io('http://localhost:8067');

    socket.on('chat message', function(msg){
      dispatch({type: 'RECEIVE_MESSAGE', payload: msg});
    });
  }

  componentWillUnmount() {
    socket.disconnect();
  }

  sendMessage (e, message) {
    if(e.key === 'Enter' && message.value != '') { // add text validation
      const { dispatch } = this.props;
      socket.emit('chat message', message.value);
      dispatch({type: 'SEND_MESSAGE', payload: message.value});
      message.value = '';
    }
  }

  render() {
    const { dispatch, messages } = this.props;
    let message;
    return (
      <ChatWindowWrapper>
        <ChatMessageContainer>
          {messages.map(m => <ChatMessage message={m} />)}
        </ChatMessageContainer>
        <ChatInput
          placeholder="Enter a text message"
          innerRef={(input) => { message = input; }}
          onKeyPress={(e) => { this.sendMessage(e, message) }}
        />
      </ChatWindowWrapper>
    );
  }
}

export { ChatWindow };
