import React from 'react';
import styled from 'styled-components';

const ChatInputWrapper = styled.input.attrs({
  type: 'input',
})`
  border: 1px solid;
  width: 100%;
  font-size: 15px;
  padding: 5px;
  border: none;
  box-sizing: border-box;
  outline: none;
  box-shadow: 0px -1px 1px 0px #D3d3d3;
  font-family: Raleway;
`;

const ChatInput = ({...props}) => (
  <ChatInputWrapper {...props}>

  </ChatInputWrapper>
);

export { ChatInput }
