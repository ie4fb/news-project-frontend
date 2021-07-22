import { combineReducers } from 'redux';
import { newsReducer } from './news';
import { blogsReducer } from './blogs';
import { newsTagFilterReducer } from './newsTagFilter';
import { loginReducer } from './login';
import { appReducer } from './app';
import { blogsTagFilterReducer } from './blogsTagFilter';

export const rootReducer = combineReducers({
  newsTagFilter: newsTagFilterReducer,
  news: newsReducer,
  login: loginReducer,
  app: appReducer,
  blogs: blogsReducer,
  blogsTagFilter: blogsTagFilterReducer,
});
