import styled from 'styled-components';
import React from 'react';
import helloWorld from '../modules/hello.module';
import { Chat } from './containers/Chat';
import { Provider } from 'react-redux';
import store from '../store/store';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 50vw;
  font-family: "Raleway";
`;

export default function () {
  const result = helloWorld();
  return (
    <Wrapper>
      <Provider store={store}>
        <Chat />
      </Provider>
    </Wrapper>
  );
}
