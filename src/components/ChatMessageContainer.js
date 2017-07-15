import React from 'react';
import styled from 'styled-components';

const ChatMessageContainerWrapper = styled.div`
  overflow-y: scroll;
  height: 350px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 5px;
`;

const MessageList = styled.ol`
  padding: 0 10px 5px 5px;
  width: 100%;
  text-align: right;
  overflow-y: scroll;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ChatMessageContainer = ({ children }) => {
  return (
    <ChatMessageContainerWrapper>
      <MessageList innerRef={input => { if(input) {input.scrollTop = input.scrollHeight; console.log(input, input.scrollHeight, input.scrollTop);}}}>
        {children}
      </MessageList>
    </ChatMessageContainerWrapper>
)}

export { ChatMessageContainer };
