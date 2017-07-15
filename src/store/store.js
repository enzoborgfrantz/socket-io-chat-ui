import { createStore, applyMiddleware, combineReducers } from 'redux';
import { chatReducer } from '../components/containers/Chat';
import { chatMiddleware } from '../middleware/chat.middleware';

const middlewares = [
  chatMiddleware,
];

const reducers = combineReducers({
  chat: chatReducer
});

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

export default store;
