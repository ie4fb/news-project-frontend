import { combineReducers } from 'redux';
import { newsReducer } from './news';
import { tagFilterReducer } from './tagFilter';
import { loginReducer } from './login';
import { appReducer } from './app';

export const rootReducer = combineReducers({
  tagFilter: tagFilterReducer,
  news: newsReducer,
  login: loginReducer,
  app: appReducer,
});
