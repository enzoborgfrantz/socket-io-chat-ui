import React from 'react';
import styled from 'styled-components';

const ChatMessageWrapper = styled.li`
  border: 1px solid;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 15px;
  background-color: #26c6da;
  color: white;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;

const ChatMessage = ({message}) => (
  <ChatMessageWrapper> {/*put extra wrapper for width*/}
    {message}
  </ChatMessageWrapper>
);

export { ChatMessage }
